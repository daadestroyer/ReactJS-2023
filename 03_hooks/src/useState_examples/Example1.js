import React, { useState } from 'react'

export default function Example1() {
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
        <h2>React Hooks (useState) Example - 1</h2>
        <h3>Counter Value : {counter}</h3>
        
        <button className="mt-3 btn btn-primary" onClick={incrementValue}>Increment Value</button>{' '}
        <button className="mt-3 btn btn-success" onClick={decrementValue}>Decrement Value</button>{' '}
         
      </center>
    </>
  )
}
