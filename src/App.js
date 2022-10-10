// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
// import React, { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  const [Mode, setMode] = useState('light');// whether dark mode is enabled or not
  const [btntxt, setbtntxt] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null)
  const [alertstate,setalertstate]=useState(false)
  const showAlert = (message, type) => {
    setalertstate(true)
    setAlert({
      msg: message,
      type: type
    })
    
    setTimeout(() => {
      setAlert(null);
      setalertstate(false)
    }, 1000);
  }


  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      
      setbtntxt('Enable Light Mode');
      document.body.style.backgroundColor = '#000066';
      document.body.style.color = 'white'
      showAlert(" Dark mode has been enabled", "success");

      document.title = 'TextEdit-Dark Mode';

    }
    else {

      setMode('light');
      setbtntxt('Enable Dark Mode');
      setalertstate(true)
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#042743'

      showAlert("Light mode has been enabled", "success");

      document.title = 'TextEdit-Light Mode';


    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextEdit" about="About" mode={Mode} toggleMode={toggleMode} btntxt={btntxt} />

        <Alert alert={alert} alertstate={alertstate} />
        <Routes>
          <Route exact path="/" element={<strong><TextForm showAlert={showAlert} heading="Enter the text Now" /></strong>}/>
            
         
          <Route exact path="/about" element={ <About mode={Mode} />}/>
           
          
        </Routes>
      </Router>

    </>
  );
}
export default App



