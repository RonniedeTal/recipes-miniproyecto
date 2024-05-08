import React, { useState } from "react";
import AllRecipes from "../data/recetas.json";
import { Link } from "react-router-dom";
import Forms from "./Forms";
import ItemDetailsPage from "../assets/pages/ItemDetailsPage";
function List() {
  const [recipesToShow, setRecipesToShow] = useState(AllRecipes);

  const handleAddRecipe = (newRecipe) => {
    const updatedRecipes = [...recipesToShow, newRecipe];
    setRecipesToShow(updatedRecipes);
  };

  const handleDelete = (indexToDelete) => {
    const updatedRecipes = [...recipesToShow];
    updatedRecipes.splice(indexToDelete, 1);
    setRecipesToShow(updatedRecipes);
  };

  return (
    <div>
      <Forms onAddRecipe={handleAddRecipe} />

      

      <h1>Recetas:</h1>

      {recipesToShow.map((eachRecipe, index) => (
        <div key={index}>
          <hr />
          <Link to={`/item-details-page/${eachRecipe.nombre}`}>
            <h2>{eachRecipe.nombre}</h2>
          </Link>
          <h2>{eachRecipe.vegano ? <span>🥦</span> : <span>🍗🥩</span>}</h2>
          <button onClick={() => handleDelete(index)}>Borrar</button>
        </div>
      ))}
    </div>
  );
}

export default List;
