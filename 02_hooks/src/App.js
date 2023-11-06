import { useState } from "react";
import { Button } from 'react-bootstrap';
import React from 'react';

function App() {
  const [counter, setCounter] = useState(15);

  const incrementValue = () => {
    setCounter(counter + 1)
  };

  const decrementValue = ()=>{
    setCounter(counter - 1)
  }

  return (

    <>
      <center className="mt-5">
        <h1>Chai Aur React</h1>
        <h3>Counter Value : {counter}</h3>
        
        <button className="btn btn-primary" onClick={incrementValue}>Increment Value</button>{' '}
        <button className="btn btn-success" onClick={decrementValue}>Decrement Value</button>{' '}
         
      </center>
    </>
  );
}

export default App;
