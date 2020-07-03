import React from 'react';
import './App.css';
import './component/Navbar'
import Navbar from './component/Navbar';
import Content from "./component/Content";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
      <Navbar/>
      <Content/>
        
      </div>
      

   
    </div>
  );
}

export default App;
