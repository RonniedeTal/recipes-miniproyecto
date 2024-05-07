import React from 'react'
import AllRecipes from "../../data/recetas.json"
import { useParams } from 'react-router-dom'

function ItemDetailsPage() {
    const parametrosDinamicos=useParams()
    console.log(parametrosDinamicos);

    const foundRecipe=recipesToShow.find((eachRecipe)=>{
        return eachRecipe.nombre==parametrosDinamicos.recipesName
        
    })
    console.log(foundRecipe);



    
  return (
    <div>
      <h1>aqui las recetas</h1>
      
      <h2>{foundRecipe.nombre}</h2>
      
      <p>Descripcion: {foundRecipe.descripcion}</p>
      <p>Preparacion: {foundRecipe.preparacion}</p>
      
    </div>
  )
}

export default ItemDetailsPage
