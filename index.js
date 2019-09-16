import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import AppRouter from './Router';

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  )
}

render(<App />, document.getElementById('root'));
