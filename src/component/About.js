import React,{useEffect, useState} from "react";


function About(){
    useEffect(()=>{
        document.querySelector(".header-logo").innerHTML=`demo${num}`
    })
    const [num,state]=useState(0);    
    return(<div>
        <button onClick={()=>{state(num+1)}}>Click me {num}</button>
    </div>);
}
export default About;