import React from 'react';
import logo from './logo.svg';
import './App.css';
import SayHello from './SayHello';


function App() {
  return (
    <div>
      <h2>Well Hello</h2>
      <SayHello say_something='Well Howdy there' />
    </div>
  );
}

export default App;
