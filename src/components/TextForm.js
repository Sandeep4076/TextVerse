import React, { useState } from 'react'
 

export default function TextForm(props) {
  const handleUPClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handlelowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleClearClick = () => {
    let newtext = '';
    setText(newtext)
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
      <h1>{props.heading}</h1>
          <div className="mb-3">
        <textarea className="form-control" value={ text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
          </div>
        <button className="btn btn-danger mx-1" onClick={handleUPClick}>Convert to UPPERCASE</button>
        <button className="btn btn-warning mx-1" onClick={handlelowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        <button className="btn btn-secondary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-dark mx-1" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary </h2>
        <p> {text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes Reading Time</p>
        <h3>Preview</h3>
        <p>{ text}</p>
      </div>
      </>
  )
}
