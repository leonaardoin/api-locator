import React from "react";
const RecipeCard = ({ recipe }) => {
    //renders recipe card with image, category, name and link to recipe. recipe is object containing recipe details that renders recipe card. recipe object destructured to get properties
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    //render recipe card
    return (
        <div className="card">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
            />
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Go Eat!</a>
            </div>
        </div>
    )
};

export default RecipeCard;
