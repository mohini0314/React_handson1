import React from 'react';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponent from './Components/ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p className="title">Styling using Functional and Class Components</p>
        <div className="container">
          <FunctionComponent/>
          <ClassComponent/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
