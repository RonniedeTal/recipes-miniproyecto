import React from 'react'

function ListItem(props) {
  const {id, nombre, vegano, descripcion, preparacion}=props.propseachRecipe
  console.log(props);
  
  return (
    <>
    <h1>Nueva receta</h1>
    </>
  )
}

export default ListItem
