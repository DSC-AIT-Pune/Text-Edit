import { useState } from "react";
import "./App.css";
// import About from './components/About';
// import React, { useState } from 'react';
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [Mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(56, 56, 56)";
      document.body.style.color = "azure";
      showAlert(" Dark mode has been enabled", "success");
      document.title = "TextEdit-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "azure";
      document.body.style.color = "black";
      showAlert(" Light mode has been enabled", "success");
      document.title = "TextEdit-Light Mode";
    }
  };
  return (
    <>
      <Navbar
        title="TextEdit"
        about="About"
        mode={Mode}
        toggleMode={toggleMode}
      />
      <div className="container" my-3>
        <Alert alert={alert} />
        <strong>
          <TextForm showAlert={showAlert} heading="Enter your text" />
        </strong>
      </div>
    </>
  );
}
export default App;
