import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s="; //API endpoint for searching recipes

function App() {
  //define state variables
  const [isLoading, setIsLoading] = useState(false); //load state
  const [query, setQuery] = useState(""); //query state
  const [recipes, setRecipes] = useState([]); //recipes state
  
  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true); //set loading state to true
    const url = searchApi + query //construct API endpoint URL
    const res = await fetch(url); //fetch data from API endpoint
    const data = await res.json(); //convert response to JSON format
    setRecipes(data.meals); //set recipe state to the fetched data
    setIsLoading(false); //set loading state to false
  };

  //useEffect hook to search for receipe on component mount
  useEffect(() => {
    searchRecipes()
  }, []);
  const handleSubmit = (event) => { 
    event.preventDefault(); //prevent default form submission behavior
    searchRecipes(); //call searchRecipes function to search for recipe
  }

  //render the app component
  return (
    <div className="container">
      <h1>Your Favorite Foods!</h1>
      <h3> enter a food name or ingredient below to get your favorite food.</h3>
      <SearchBar
        isLoading={isLoading} //pass loading state to SearchBar component
        query={query} //pass query state to SearchBar component
        setQuery={setQuery} //pass setQuery function to SearchBar component
        handleSubmit={handleSubmit} //pass handleSubmit function to SearchBar component
      />
      <div className="recipes">
        {recipes ? recipes.map(recipe => (
          <RecipeCard
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Results. Please try another search."}
      </div>
    </div>
  );
}

export default App;
