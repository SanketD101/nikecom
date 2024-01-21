import React from "react";

const arr=[1, 2, 3, 6, 3, 6, 1];
function FindNo(){
    console.log(arr.sort());
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]==arr[i+1]){
            console.log(arr[i]);
        }
    }
}

function Prac(){
    return <><h1>{arr}</h1><h3>{arr.sort()}</h3></>;
}
FindNo();
export default Prac;