import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./css/cardinfo.css";
import Review from './Review';
import Navbar from './Navbar';
import AddRemove from './AddRemove';

const Cardinfo = () => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5005/games/gameinfo/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch game details');
        }
        const gameData = await response.json();
        setGameDetails(gameData);
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };

    const fetchUserWishlist = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5005/wishlist/show', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user wishlist');
        }
        const wishlistData = await response.json();
        const isInWishlist = wishlistData.games.includes(id);
        setIsInWishlist(isInWishlist);
      } catch (error) {
        console.error("Error fetching user wishlist:", error);
      }
    };

    fetchGameDetails();
    fetchUserWishlist();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="cardinfo-container">
        {gameDetails ? (
          <div className="game-details ">
            <h2 className='text-center' style={{ fontSize: '60px' }}>{gameDetails.name}</h2>
            <img src={gameDetails.background_image} alt={gameDetails.name} />
            <p>Release Year: {new Date(gameDetails.released).getFullYear()}</p>
            <p>Playtime: {gameDetails.playtime} hours</p>
            <p>Platforms: {gameDetails.platforms.join(', ')}</p>
            <p>Rating: {gameDetails.rating}</p>
            <p>Metacritic Score: {gameDetails.metacritic}</p>
            <p>Genres: {gameDetails.genres.join(', ')}</p>
            <p>Developers: {gameDetails.developers.join(', ')}</p>
            <p className='text-center' style={{ fontSize: '35px' }}>SCREENSHOTS</p>
            <div className="screenshots">
              {gameDetails.short_screenshots.map((screenshot, index) => (
                <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} />
              ))}
            </div>
            <AddRemove gameId={id} isInWishlist={isInWishlist} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <Review gameId={id} />
      </div>
    </>
  );
};

export default Cardinfo;
