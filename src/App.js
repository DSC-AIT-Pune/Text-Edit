import "./App.css";
import { React, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Socialhandles from "./components/Socialhandles.js";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Ask from "./components/Ask";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { isButtonElement } from "react-router-dom/dist/dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [btntxt, setbtntxt] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const [alertstate, setalertstate] = useState(false);

  const showAlert = (message, type) => {
    setalertstate(true);
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
      setalertstate(false);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setbtntxt("Enable Light Mode");
      document.body.style.backgroundColor = "rgb(56, 56, 56)";
      document.body.style.color = "azure";
      showAlert(" Dark mode has been enabled", "success");
      document.title = `TextEdit - Dark Mode`;
    } else {
      setMode("light");
      setbtntxt("Enable Dark Mode");
      setalertstate(true);
      document.body.style.backgroundColor = "azure";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      document.title = `TextEdit - Light Mode`;
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextEdit"
          about="About"
          Socialhandles="Socialhandles"
          Contact="Contact"
          mode={mode}
          toggleMode={toggleMode}
          btntxt={btntxt}
        />

        <Alert alert={alert} alertstate={alertstate} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <strong>
                <TextForm
                  mode={mode}
                  showAlert={showAlert}
                  heading="Now you can enter the text"
                />
              </strong>
            }
          />

          <Route exact path="/About" element={<About mode={mode} />} />
          <Route exact path="/Contact" element={<Contact mode={mode} />} />
          <Route exact path="/Ask" element={<Ask />} />
          <Route
            exact
            path="/Socialhandles"
            element={<Socialhandles mode={mode} />}
          />
        </Routes>
      </Router>
    </>
  );
}
export default App;
