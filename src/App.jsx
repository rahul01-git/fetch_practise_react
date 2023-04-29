import { useState, useEffect } from "react";
import "./App.css";
import Cocktail from "./component/Cocktail";
import Button from "./component/Button";

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
    <div className="card">
      <Button handleClick={handleClick} />
      {cocktail && <Cocktail cocktail={cocktail} ingredients={ingredients} />}
    </div>
  );
}

export default App;
