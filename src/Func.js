import React, { useState } from 'react'
// import imag from './assets/south korea.jpg';
import './App.css';
function Func() {
    const[count, setCount]=useState(0);
    const handleCount=() =>{
        setCount(count+1);
    }
  return (
    
    <div className='container'>
      <h1>Hi from Functional Components ✨</h1>
      {/* <img src={imag}/> */}
      <button onClick={handleCount}>Increment</button>
      <span>{count}</span>
    </div>
    )
}

export default Func