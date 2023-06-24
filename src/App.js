
// import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import React, { useState } from 'react';
import React, { useState } from 'react';
 

function App() {
  const [mode, setMode] = useState('dark');
  return (
    <>
      <Navbar title="TextVerse" aboutText="About" mode={mode } />
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm heading= "Enter the Text to Analyze"/>
        {/* <About/> */}
      </div>
     
    </>
      
  );
}

export default App;
