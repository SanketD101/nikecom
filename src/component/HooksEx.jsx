import React, { useState } from "react";



function HooksEx(){
    const[count,setCount]=useState(0);
    function IntInc(){
        setCount(count+1);
    }
    function IntDec(){
        setCount(count-1);
    }

    return <>
    <h1>{count}</h1>
    <button onClick={IntInc}>Add 1</button>
    <button onClick={IntDec}>Add -1</button>
    </>;
}
export default HooksEx;