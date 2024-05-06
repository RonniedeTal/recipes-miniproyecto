import React from "react";
import { useState } from "react";
import AllRecipes from "../data/recetas.json";
console.log(AllRecipes);


function Forms() {
  //const[recipes, setRecipes] = useState(AllRecipes)
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [vegano, setVegano] = useState(false);
  const [preparacion, setPreparacion] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };
  const handlePreparacionChange = (event) => {
    setPreparacion(event.target.value);
  };
  const handleVeganoChange = (event) => {
    setVegano(event.target.checked);
  };

 const handleSubmit = (event) => {
  event.preventDefault();
  const newRecipe = {
    nombre,
    descripcion,
    vegano,
    preparacion,
   
  };
  setRecipesToShow([...recipesToShow, newRecipe]);
  setNombre("");
  setVegano(false);
  setDescripcion("");
  setPreparacion("");
};

  return (
    <form onSubmit = {handleSubmit}>
      <h1>Añade una receta</h1>

      {/* FORM */}
      <div>
        <div>
          <label>
            Nombre receta:
            <input
              name="nombre"
              type="text"
              placeholder="Nombre de la receta"
              value={nombre}
              onChange={handleNombreChange}
            />
          </label>
          <br />
          <label>
            Descripción:
            <input
              name="Descripción"
              type="text"
              placeholder="Descripción de la receta"
              value={descripcion}
              onChange={handleDescripcionChange}
            />
          </label>
          <br />

          <label>
            Preparación:
            <input
              name="Preparación"
              type="text"
              placeholder="Preparación de la receta"
              value={preparacion}
              onChange={handlePreparacionChange}
            />
          </label>
          <br />
          <label>
            Vegano
            <input
              name="Vegano"
              type="checkbox"
              checked={vegano}
              onChange={handleVeganoChange}
            />
          </label>
          <br />
          <button type="submit">Anadir receta</button>
     
        

        </div>
      </div>
    </form>
  );
}

export default Forms;
