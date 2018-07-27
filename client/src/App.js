import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import MainMenu from './components/MainMenu'
import ProductsList from './containers/ProductsList'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainMenu />
          <Route exact path="/" component={ProductsList} />
        </div>
      </Router>
    );
  }
}

export default App;
