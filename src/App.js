import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipesGrid from "./RecipesGrid";
import Button from "@material-ui/core/Button";
import "./App.css";
require("dotenv").config();

const App=()=> {
  //.env 
  const config = {
    Application_ID: "9ba58d25",
    Application_Keys: "8116cd3fcc9c6ae33281eca71e72fd21",
  };

  const [recipes, setRecipes] = useState([]);
  const [queryParam, setQueryParam] = useState("chicken");
  useEffect(() => {

    getRequest();
  }, []);

  const getRequest = async () => {
    // const data=[]
    // const recipe= { recipe: {label: "lable 2 ", count :2}}
    // console.log(recipe)
    // data.push(recipe); 
    // setRecipes(data); 
    await axios
      .get(
        `https://api.edamam.com/search?q=${queryParam}&app_id=${config.Application_ID}&app_key=${config.Application_Keys}`,
        { mode: "no-cors" }
      )
      .then((res) => {
        const data = res.data;
        setRecipes(data.hits);
        console.log(data.hits);
      });
  };

  const updateSearch = (e) => {
    const value = e.target.value;
    setQueryParam(value);
  };

  const search = (e) => {
    e.preventDefault();
    getRequest();
    document.getElementById("input").value = " ";
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Recipes API</h1>
      <div className="wrapper">
        <input
          id="input"
          placeholder="Search for"
          variant="filled"
          onChange={(e) => updateSearch(e)}
        />
        <Button onClick={search} variant="contained" color="primary">
          Search
        </Button>
      </div>

      {recipes.map((recipe) => (
        <RecipesGrid
          key={recipe.recipe.label}
          label={recipe.recipe.label}
          image={recipe.recipe.image}
          source={recipe.recipe.source}
          totalTime={recipe.recipe.totalTime}
          calories={Math.round(recipe.recipe.calories * 10) / 10}
          totalWeight={Math.round(recipe.recipe.totalWeight * 10) / 10}
          dietLabels={recipe.recipe.dietLabels[0]}
          ingredients={recipe.recipe.ingredients}
          digest={recipe.recipe.digest}

        />
      ))}

    </div>
  );
}

export default App;
