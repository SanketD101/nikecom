import React from "react";
import NavBar from "./NavBar";
import BodyCon from "./BodyCon";
import Prac from "./Prac";
import HooksEx from "./HooksEx";
import NavBarTest from "./NavBarTest";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import UseEffectHooks from "./UseEffectHooks";
import Todo from "./Todo";

function App(){
   return (<BrowserRouter>
      <NavBarTest/>
      <Todo/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
      </Routes>
   </BrowserRouter>
   );
}
export default App;