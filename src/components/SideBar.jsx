import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className="sider">
      <Link to="/"> <button id="boton">HOME</button></Link>
      <Link to="/about-page"><button id="boton">About Page</button></Link>
    </div>
  )
}

export default SideBar
