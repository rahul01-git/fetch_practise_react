import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cocktail, setCocktail] = useState([]);
  const [ingredients, setIngredients] = useState([]);


  const handleClick = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setCocktail(data.drinks[0]));
  };


  useEffect(() => {
    const newIngredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];
      if (ingredient && measure) {
        newIngredients.push(`${measure.trim()} ${ingredient}, `);
      }
    }
    setIngredients(newIngredients);
  }, [cocktail]);
  return (
    <div>
      <button onClick={handleClick}>New</button>
      <p>Name: {cocktail.strDrink}</p>
      <p>Ingredients: </p>
      <ul>
        {ingredients.map((ing,idx)=><li key={idx}>{ing}</li>)}
      </ul>
      <p>Image:</p>
      <img src={cocktail.strDrinkThumb} style={{ width: 200 }} alt="" />
      <p>Recipe: {cocktail.strInstructions}</p>
    </div>
  );
}

export default App;
