// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
// import React, { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [Mode, setMode] = useState('dark');// whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "primary");
      document.title = 'TextEdit-Dark Mode';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled", "success");
      document.title = 'TextEdit-Light Mode';

    }
  }
  return (
    <>
      <Navbar title="TextEdit" about="About" mode={Mode} toggleMode={toggleMode} />
      <div className="container" my-3  >
        <Alert alert={alert} />
        <strong><TextForm showAlert={showAlert} heading="Enter your text" /></strong>
      </div>
    </>
  );
}
export default App



