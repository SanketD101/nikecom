import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Home(){
    useEffect(()=>{
        document.querySelector(".header-logo").innerHTML="Using use Effect";
    },[]);
    return(
    <h1>Home</h1>    
    );
}
export default Home;