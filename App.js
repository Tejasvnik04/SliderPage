import "./App.css";
import Carousel from "./Carousel";
import React from "react";
import Navbar from "./Navbar";
import bgvideo from "../components/images/file.mp4"
import About from "./About";
import Menu1 from "./Menu1";
import Contact from "./Contact"
import {BrowserRouter as Routes,Route} from 'react-router-dom';
import { Menu } from "@mui/material";
function App() {
  return (
    <div className="App">  
     <video autoPlay loop muted >
    <source src={bgvideo} type="video/mp4" />
    Your browser does not support the video tag.
    </video>
    <div className="surface">
      <Routes>
      <Navbar/>
    
        <Route exact path="/" element={<Carousel/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/menu1" element={<Menu1/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        
      </Routes>
    </div>
    </div>
  );
}

export default App;