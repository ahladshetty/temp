import React from 'react';

const AddRemove = ({ gameId, isInWishlist }) => {
  const token = localStorage.getItem('token');

  const addToWishlist = async () => {
    try {
      const response = await fetch(`http://localhost:5005/wishlist/add/${gameId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      if (!response.ok) {
        throw new Error('Failed to add game to wishlist');
      }
    } catch (error) {
      console.error("Error adding game to wishlist:", error);
    }
  };

  const removeFromWishlist = async () => {
    try {
      const response = await fetch(`http://localhost:5005/wishlist/remove/${gameId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to remove game from wishlist');
      }
    } catch (error) {
      console.error("Error removing game from wishlist:", error);
    }
  };

  const handleButtonClick = () => {
    if (isInWishlist) {
      removeFromWishlist();
    } else {
      addToWishlist();
    }
  };

  return (
    <button onClick={handleButtonClick}>
      {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
  );
};

export default AddRemove;
