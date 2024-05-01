import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import Recipes from './components/Recipes'
import Container from './components/Container'
import Home from './components/Home'
import './App.css'

function App() {
  

  return (
    <>
    <NavBar
     picture="src/assets/images/foodlogo.jpg"
     />
     
    <SideBar /> 
   
    <Container />
    <Home />
    <Footer />

      
    </>

  )
}

export default App
