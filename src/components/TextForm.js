import React, { useState } from 'react'

export default function TextForm(props) {
  console.log(props)

  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert(" Converted to UpperCase!", "success")

  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert(" Converted to LowerCase!", "success")

    
  }
  const handleclearClick = () => {
    let newText = "";
    setText(newText)
    props.showAlert(" Text has been cleared!", "success")

  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text has been Copied!", "success")

  }
  const finder = ()=>{
    let find = document.querySelector('.search').value
    let replace = document.querySelector('.replace').value
    let str = text.replace(find,replace)
    setText(str)
    props.showAlert(` ${find} replaced with ${replace}`,"success")
    }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Extra spaces have been removed!", "success")

  }
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <label for="myBox" className="form-label"><b>Enter the text Now</b></label>
          <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor: props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>convert to lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleclearClick}>Clear text </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy-Text</button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove extra spaces</button>

        <div className="row mt-4 mb-4">
        <div className="col">
          <input type="text" className="form-control search" placeholder="Search"/>
        </div>
        <div className="col">
          <input type="text" className="form-control replace" placeholder="Replace"/>
        </div>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={finder}>Search and Replace</button>

      </div>
      <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2 >Your text summarry</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes content left </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview"}</p>
      </div>
    </>
  )
}



























