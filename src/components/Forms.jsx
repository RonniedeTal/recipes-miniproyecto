import React, { useState } from "react";

function Forms(props) {
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
    props.onAddRecipe(newRecipe);
    setNombre("");
    setVegano(false);
    setDescripcion("");
    setPreparacion("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Añade una nueva receta</h1>

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
              name="descripcion"
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
              name="preparacion"
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
              name="vegano"
              type="checkbox"
              checked={vegano}
              onChange={handleVeganoChange}
            />
          </label>
          <br />
          <button type="submit">Añadir receta</button>
        </div>
      </div>
    </form>
  );
}

export default Forms;
