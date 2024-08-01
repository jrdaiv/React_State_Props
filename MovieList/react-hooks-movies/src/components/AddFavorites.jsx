import React from 'react';

const AddRemoveButtons = ({ movie, addFavoriteMovie, removeFavoriteMovie}) => {
 
    return (
    <div>
      <button onClick={() => addFavoriteMovie(movie)}>Add To Fav</button>
      <button onClick={() => removeFavoriteMovie(movie)}>Remove From fav</button>
    </div>
  );
};


export default AddRemoveButtons;








