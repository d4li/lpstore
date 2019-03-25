import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import DefaultTheme from './themes/default';
import Home from './pages/_';
import About from './pages/About';

import './reset.css';
class App extends Component {
  render() {
    return (
      <Router>
        <DefaultTheme>
          <Route path="/" exact component={Home} />
          <Route path="/quem-somos/" component={About} />
        </DefaultTheme>
      </Router>
    );
  }
}

export default App;
