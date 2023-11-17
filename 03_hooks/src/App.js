 
import React, { useState } from 'react';
import UseEffect from './03_useEffect_examples/useEffect'

function App() {
  
  // const [darkMode,setDarkMode] = useState('light')
  // const [darkModeText,setDarkModeText] = useState('black')
  // const toggleMode = ()=>{
  //   if(darkMode === 'light'){
  //     setDarkMode('dark')
  //     setDarkModeText('white')
  //     document.body.style.backgroundColor = 'black'
  //     document.body.style.color= 'white'
  //   }else{
  //     setDarkMode('light')
  //     setDarkModeText('black')
  //     document.body.style.backgroundColor = 'white'
  //     document.body.style.color= 'black'
  //   }
  // }
  return (

    <>
      {/* <Example1/> */}
      {/* <Navbar mode={darkMode} toggleMode={toggleMode} darkModeText={darkModeText}/> */}

      {/* <Example2/> */}
      
      {/* <Example3/> */}

      <UseEffect/>


    </>
  );
}

export default App;
