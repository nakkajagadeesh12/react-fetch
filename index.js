import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import AppRouter from './Router';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  )
}

render(<App />, document.getElementById('root'));
