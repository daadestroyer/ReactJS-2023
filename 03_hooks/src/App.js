 
import React, { useState } from 'react';
import Example1 from "./useState_examples/Example1";
import Example2 from "./useState_examples/Example2";
import Example3 from "./useState_examples/Example3";
import Navbar from './components/Navbar';

function App() {
  
  const [darkMode,setDarkMode] = useState('light')
  const [darkModeText,setDarkModeText] = useState('black')
  const toggleMode = ()=>{
    if(darkMode === 'light'){
      setDarkMode('dark')
      setDarkModeText('white')
      document.body.style.backgroundColor = 'black'
      document.body.style.color= 'white'
    }else{
      setDarkMode('light')
      setDarkModeText('black')
      document.body.style.backgroundColor = 'white'
      document.body.style.color= 'black'
    }
  }
  return (

    <>
      {/* <Example1/> */}
      <Navbar mode={darkMode} toggleMode={toggleMode} darkModeText={darkModeText}/>

      <Example2/>
      
      {/* <Example3/> */}
    </>
  );
}

export default App;
