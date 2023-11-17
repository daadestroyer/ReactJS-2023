import React, { useState } from "react";

export default function Example2() {
  const [text,setText] = useState('')
  const changetext = (event)=>{
      setText(event.target.value)
  }
  const convertUpperCase = ()=>{
    let upperCaseText = text.toUpperCase()
    setText(upperCaseText)
  }
  const convertLowerCase = ()=>{
    let lowerCaseText = text.toLowerCase()
    setText(lowerCaseText)
  }
  const clearText = ()=>{
    setText("")
  }
  const convertToBold = ()=>{
    if(document.getElementById('previewText').style.fontWeight === 'bold'){
      document.getElementById('previewText').style.fontWeight =  'normal'
    }
    else{
      document.getElementById('previewText').style.fontWeight = 'bold'  
    }
  }
  const convertToItalic = ()=>{
    if(document.getElementById('previewText').style.fontStyle === 'italic'){
      document.getElementById('previewText').style.fontStyle =  'normal'
    }
    else{
      document.getElementById('previewText').style.fontStyle = 'italic'  
    }
  }

  return (
    <>
     <div className="container mt-5">
     <h1 className="text-center">Word and Character Counter</h1>
     <div class="input-group">
        <textarea class="form-control"  placeholder="Enter your text" value = {text} onChange={changetext} aria-label="With textarea" rows="4"></textarea>
      </div> 
      <button className="mt-4 btn btn-primary" onClick={convertUpperCase}>Convert to Upper Case</button> 
      <button className="mt-4 ml-4 btn btn-primary" onClick={convertLowerCase}>Convert to Lower Case</button> 
      <button className="mt-4 ml-4 btn btn-primary" onClick={clearText}>Clear Text</button> 
     </div>
     <hr />
     <div className="container mt-5">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
     </div>

     <div className="container mt-5">
      <h2>Preview</h2>
      <p id="previewText">{text}</p>
     </div>

     <div className="container ">
     <button className="mt-5 btn btn-primary" onClick={convertToBold}>Bold</button> 
     <button className="mt-5 ml-4 btn btn-primary" onClick={convertToItalic}>Italic</button> 
     </div>
     
    </>
  );
}
