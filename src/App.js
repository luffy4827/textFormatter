
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      showAlert("Dark Mode have been enabled", "success");
      document.body.style.backgroundColor ='rgb(46, 51, 55)';
      document.title= "Text Foratter - Home - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode have been enabled", "success");
      document.title= "Text Foratter - Home";
    }
  }

  return (
    <>
      <Navbar title="TextForrmatter" aboutpage="About" mode={mode} toggleMode={toggleMode} />
      <Alert  alert= {alert} />
      <div className="container my-2">
        <TextForm showAlert={showAlert} heading="Enter Your Text" mode={mode}/>
      </div>
    </>
  );
}

export default App;
