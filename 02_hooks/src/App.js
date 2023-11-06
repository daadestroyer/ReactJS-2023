import { useState } from "react";

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
      <center>
        <h1>Chai Aur React</h1>
        <h3>Counter Value : {counter}</h3>
        <button onClick={incrementValue}>Increment Value</button> <br /> <br />
        <button onClick={decrementValue}>Decrement Value</button>
      </center>
    </>
  );
}

export default App;
