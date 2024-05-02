import React from 'react'
import {useState}from "react"
import AllRecipes from "../data/recetas.json"




function List() {
    const [recipesToShow, setRecipesToShow]=useState(AllRecipes)
    const handleAddRecipes=()=>{
     //no se puede modicar un array original
     //buscar el primer elemento de las recetas 
     const recipeToadd=AllRecipes.shift()
     console.log(recipeToadd);
     //añadirlo al estado del dom (pantalla)
     const clone =JSON.parse(JSON.stringify(recipesToShow))
     clone.push(recipeToadd)
     //el nuevo valor del estado sera el valor del clone
     setRecipesToShow(clone)
    }
 
    //boton de borrar
 
    const handleDelete=(indexToDelete)=>{
     const clone=JSON.parse(JSON.stringify(recipesToShow))
     clone.splice(indexToDelete,1)
     setRecipesToShow(clone)
    }
  return (
     <div >
         <h1>Recetas:</h1>
        {/* {/* {<button onClick={handleAddRecipes}>Cocina Catalana</button>}*/ }
         {recipesToShow.map((eachRecipes,index)=>{
             return(
                 <div key={eachRecipes.id}>
                     
                     <hr />
                     <h2>{eachRecipes.nombre}</h2>
                     <h2>{eachRecipes.vegano===true? <span>🥦</span>:<span>🍗🥩</span>}</h2>
                
                  <button onClick={()=>handleDelete(index)}>Borrar</button>
                 </div>
             )
 
         })}
     </div>
   )
}

export default List
