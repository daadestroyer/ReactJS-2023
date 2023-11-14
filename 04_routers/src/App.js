import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contacts";
import Services from "./Pages/Services";

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [darkModeText, setDarkModeText] = useState("black");
  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      setDarkModeText("white");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setDarkMode("light");
      setDarkModeText("black");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
     <BrowserRouter>

      <Navbar   mode={darkMode}toggleMode={toggleMode}darkModeText={darkModeText}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
  
      </BrowserRouter>
    </>
  );
}

export default App;
