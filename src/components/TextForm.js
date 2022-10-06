import React, { useState } from 'react';
import PDFfile from './PDFfile'
import {PDFDownloadLink} from '@react-pdf/renderer';
export default function TextForm(props) {
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
  const finder = () => {
    let find = document.querySelector('.search').value
    let replace = document.querySelector('.replace').value
    let str = text.replace(find, replace)
    setText(str)
    props.showAlert(` ${find} replaced with ${replace}`, "success")
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Extra spaces have been removed!", "success")

  }
  return (
    <>
      <div className="container my-2">
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">{props.heading}</label>
          <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-warning mx-3" onClick={handleLoClick}>convert to lowercase</button>
        <button className="btn btn-danger mx-3" onClick={handleclearClick}>Clear text </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy-Text</button>
        <button className="btn btn-warning mx-3" onClick={handleExtraSpaces}>Remove extra spaces</button>
       
        <PDFDownloadLink document={<PDFfile text={text} />} fileName="textEdit.pdf">
        {({ loading }) => (loading ?  <button className="btn btn-danger mx-3">'Loading document...'</button> :  <button className="btn btn-danger mx-3">Download PDF</button>)}
        </PDFDownloadLink>
       
        

        <div className="row mt-4 mb-4">
          <div className="col">
            <input type="text" className="form-control search" placeholder="Search" />
          </div>
          <div className="col">
            <input type="text" className="form-control replace" placeholder="Replace" />
          </div>
        </div>
        <button className="btn btn-danger mx-2 my-2" onClick={finder}>Search and Replace</button>



      </div>
      <div className="container my-2">
        <h2> <span className="badge bg-secondary">Your Text Summary</span></h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes content left </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the text box above to preview"}</p>
      </div>
    </>
  )
}



























