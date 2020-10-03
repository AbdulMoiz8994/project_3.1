import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Dinner dishName="Biryani" sweetDish="Kheer"/>
        <hr/>
        <Dinner dishName="korma" sweetDish="gajar ka halwa"/>        
        <hr/>
        <Dinner teachers=""/>
      </header>
    </div>
  );
}

export default App;
