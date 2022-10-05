import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to UpperCase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to LowerCase!", "success");
  };

  const handleclearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" Text has been cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text has been Copied!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces have been removed!", "success");
  };

  const handleCapBtn = () => {
    let newtext = text.toLowerCase();
    let lowtext = newtext.trim().replace(newtext[0], "");
    let uptext = newtext[0].toUpperCase();
    setText(uptext + lowtext);

    props.showAlert("Text Capitalized !", "primary");
  };

  return (
    <>
      <div>
        <div className="container my-5">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter the text here
          </label>
          <textarea
            className="form-control"
            id="myText"
            rows="5"
            value={text}
            onChange={handleOnChange}
            style={
              props.Mode === "dark"
                ? { backgroundColor: "gray", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
          ></textarea>
          <button
            type="submit"
            disabled={text?.length > 0 ? false : true}
            className={`btn btn-${
              props.Mode === "dark" ? "dark" : "primary"
            } m-2`}
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            type="submit"
            disabled={text?.length > 0 ? false : true}
            className={`btn btn-${
              props.Mode === "dark" ? "dark" : "primary"
            } m-2`}
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            type="submit"
            disabled={text?.length > 0 ? false : true}
            className={`btn btn-${
              props.Mode === "dark" ? "dark" : "primary"
            } m-2`}
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            type="submit"
            disabled={text?.length > 0 ? false : true}
            className={`btn btn-${
              props.Mode === "dark" ? "dark" : "primary"
            } m-2`}
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            type="submit"
            disabled={text?.length > 0 ? false : true}
            className={`btn btn-${
              props.Mode === "dark" ? "dark" : "primary"
            } m-2`}
            onClick={handleCapBtn}
          >
            Captilize Text
          </button>
          <button
            type="submit"
            disabled={text?.length > 0 ? false : true}
            className={`btn btn-${
              props.Mode === "dark" ? "dark" : "primary"
            } m-2`}
            onClick={handleclearClick}
          >
            Clear
          </button>
        </div>

        <div className="container my-3 text-center">
          <h3>Your text summary</h3>
          <p>
            <b>
              {text?.length > 0 && text !== /^\s+/
                ? text?.trim()?.split(/\s+/)?.length
                : 0}
            </b>{" "}
            words,
          </p>
          <p>
            <b>
              {text?.length > 0
                ? text?.length - (text?.split(" ")?.length - 1)
                : 0}
            </b>{" "}
            no. of characters &
          </p>
          <p>
            <b>{text?.length > 0 ? text?.split(" ")?.length - 1 : 0}</b> no. of
            whitespace
          </p>
        </div>

        <div className="container my-3">
          <h3>Preview</h3>
          <p>{text?.length > 0 ? text : "Write Text To Preview"}</p>
        </div>
      </div>
    </>
  );
}
