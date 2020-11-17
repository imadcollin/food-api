import DataProvider from "./DataProvider";
import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipesGrid from "./RecipesGrid";
require("dotenv").config();

function App() {
  const config = {
    Application_ID: "9ba58d25",
    Application_Keys: "8116cd3fcc9c6ae33281eca71e72fd21",
  };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log("useEffect.....");
    getRequest();
  }, []);

  const getRequest = async () => {
    await axios
      .get(
        `https://api.edamam.com/search?q=chicken&app_id=${config.Application_ID}&app_key=${config.Application_Keys}`,
        { mode: "no-cors" }
      )
      .then((res) => {
        const data = res.data;
        setRecipes(data.hits);
      });
  };

  return (
    <div className="App">
      {recipes.map((recipe) => (
        <RecipesGrid
          key={recipe.recipe.label}
          label={recipe.recipe.label}
          image={recipe.recipe.image}
          source={recipe.recipe.source}
          totalTime={recipe.recipe.totalTime}
          calories={Math.round(recipe.recipe.calories * 10) / 10}
          totalWeight={Math.round(recipe.recipe.totalWeight * 10) / 10}
        />
      ))}
    </div>
  );
}

export default App;
