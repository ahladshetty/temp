import fetch from 'node-fetch';
import Game from './Models/Game.mjs';

// Function to extract platform names from the platforms array
const extractPlatformNames = (platforms) => {
    return platforms.map(platformObj => platformObj.platform.name);
};

// Function to extract genre names from the genres array
const extractGenreNames = (genres) => {
    return genres.map(genreObj => genreObj.name);
};

// Function to extract developer names from the developers array
const extractDeveloperNames = (developers) => {
    return developers.map(developerObj => developerObj.name);
};

// Function to fetch additional game details
async function fetchAdditionalGameData(apiKey, gameId) {
    const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch additional data for game ${gameId}: ${response.status}`);
    }
    return response.json();
}

// Function to save game to MongoDB
async function saveGameToMongoDB(gameData) {
    const existingGame = await Game.findOne({ id: gameData.id });
    if (!existingGame) {
        await Game.create(gameData);
        console.log(`Game "${gameData.name}" saved to MongoDB.`);
    }
}

// Function to fetch game details from RAWG API and save to MongoDB
async function fetchGameData(apiKey) {
    const url = 'https://api.rawg.io/api/games';
    const params = new URLSearchParams({
        key: apiKey,
        // platforms: '1,186,18,187,7',
        platforms: '18',
        dates: '2000-01-01,2024-02-02',
        ordering: '-rating',
        page_size: 40, // Adjust the page size as needed
        page: 1 // Start from the first page
    });

    try {
        let nextPage = true;
        while (nextPage) {
            const response = await fetch(`${url}?${params}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from RAWG API: ${response.status}`);
            }
            const data = await response.json();

            if (!data.results) {
                throw new Error('No results found in the API response');
            }
            const games = data.results.map(game => ({
                id: game.id,
                name: game.name,
                platforms: extractPlatformNames(game.platforms),
                genres: extractGenreNames(game.genres),
                released: game.released,
                background_image: game.background_image,
                short_screenshots: game.short_screenshots ? game.short_screenshots.map(screenshot => screenshot.image) : [], // Check if short_screenshots is not null
                playtime: game.playtime || 0, // Default playtime to 0 if not provided
                metacritic: game.metacritic || 0,
                rating: game.rating 
            }));

            // Fetch additional details for each game and save to MongoDB
            await Promise.all(games.map(async (gameData) => {
                try {
                    const additionalGameData = await fetchAdditionalGameData(apiKey, gameData.id); // Pass apiKey here
                    gameData.developers = extractDeveloperNames(additionalGameData.developers);
                    await saveGameToMongoDB(gameData);
                } catch (error) {
                    console.error('Error fetching additional data or saving game to MongoDB:', error);
                }
            }));

            // Check if there is a next page
            nextPage = data.next !== null;
            if (nextPage) {
                // Update the page parameter for the next request
                const nextPageUrl = new URL(data.next);
                const nextPageNumber = nextPageUrl.searchParams.get('page');
                params.set('page', nextPageNumber); // Update the page parameter
            }
        }

        console.log('All games fetched and saved successfully.');
    } catch (error) {
        console.error('Error fetching and saving game data:', error);
    }
}

export default fetchGameData;
