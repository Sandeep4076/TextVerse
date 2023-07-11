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
    document.getSelection().removeAllRanges();
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==='dark'?'#e3f2fd':'white',color: props.mode==='dark'?'black':'black'}} id="myBox" rows="5"></textarea>
          </div>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1 " onClick={handleUPClick}>Convert to UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handlelowClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3"style={{ color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary </h2>
        <p> {text.split(/\s+/).filter((element) =>{return element.length!== 0 }).length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").filter((element) =>{return element.length!== 0 }).length} Minutes Reading Time</p>
        <h3>Preview</h3>
        <p>{ text.length>0?text:"Nothing to Preview!"}</p>
      </div>
      </>
  )
}
