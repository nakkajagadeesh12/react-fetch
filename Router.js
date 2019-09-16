import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Hello from './Hello';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/hello" exact component={Hello} />
    </Router>
  )
}

export default AppRouter;