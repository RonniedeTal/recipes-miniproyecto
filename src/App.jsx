import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

//import Container from './components/Container'
import Home from "./components/Home";
import AboutPage from "./assets/pages/AboutPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./assets/pages/NotFoundPage";
import ItemDetailsPage from "./assets/pages/ItemDetailsPage";

function App() {
  return (
    <>
      <NavBar picture="src/assets/images/foodlogo.jpg" />
      <div className="flex-contenido">
        <SideBar />

        {/* {/*<Container />*/}

        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-page" element={<AboutPage />} />
            <Route path="*"element={<NotFoundPage/>}/>
            <Route path="/item-details-page/:recipesName"element={<ItemDetailsPage />}/>
            

          </Routes>
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default App;
