import React, {useState} from "react";
import "./App.css"
const App=()=>{
  const[number, setNumber]=useState(10);
  return<div className="parent">
    <div className="content">
    <h1>The number is:{number}</h1>
    <button onClick={()=>setNumber(number+5)} className="btn">Add 5</button>
    </div>
    </div>
}
export default App;
