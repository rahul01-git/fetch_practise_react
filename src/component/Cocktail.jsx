import React from "react";


export default function Cocktail({ cocktail,ingredients }) {

  return (
    <>
      <h5>
        Name: <span>{cocktail?.strDrink || 'data not fetched'}</span>
      </h5>

      <h5>Ingredients: </h5>
      <ul>
        {ingredients?.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        )) || 'data not fetched'}
      </ul>
      <h5>Image:</h5>
      <div className="img_container">
        <img src={cocktail?.strDrinkThumb } alt="data not fetched" />
      </div>
      <h5>Recipe:</h5>
      <p>{cocktail?.strInstructions || 'data not fetched'}</p>
    </>
  );
}
