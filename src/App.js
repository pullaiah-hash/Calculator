import logo from './logo.svg';
import './App.css';
import React,{useState} from "react"
import { Component } from 'react/cjs/react.production.min';
import Calculator from './components/Calculator/Calculator';
// import Hooks from './components/funcomponents/Hooks';

function  App() {

  const [result,getResult]=useState("hi kusuma")
  

    return (
      <div className="App">
        
     <Calculator/>
      
      </div>
    );
  }


export default App;
