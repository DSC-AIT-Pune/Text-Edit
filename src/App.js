// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
// import React, { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [Mode, setMode] = useState('light');// whether dark mode is enabled or not
  const [btntxt, setbtntxt] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }


  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.getElementById('darkmode-id').style.color='white'
      document.getElementById('darkmode-id').innerText = "Enable LightMode"
      showAlert(" Dark mode has been enabled", "primary");

      document.title = 'TextEdit-Dark Mode';

    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.getElementById('darkmode-id').style.color='#042743'
      document.getElementById('darkmode-id').innerText = "Enable DarkMode"
      showAlert("Light mode has been enabled", "primary");

      document.title = 'TextEdit-Light Mode';


    }
  }
  return (
    <>
      <Navbar title="TextEdit" about="About" mode={Mode} toggleMode={toggleMode} btntxt={btntxt} />
      
        <Alert alert={alert} />
        <strong><TextForm showAlert={showAlert} heading="Enter the text Now" /></strong>
      
    </>
  );
}
export default App



