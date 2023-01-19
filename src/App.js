import React from 'react';
import './App.css';
import Stars from './components/Stars.js';

function App() {
  return (
    <div className="container">
      <Stars count={3} />
    </div>
  );
}

export default App;
