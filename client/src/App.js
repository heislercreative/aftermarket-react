import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'
import './App.css';
import MainMenu from './components/MainMenu'
import ProductsList from './containers/ProductsList'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainMenu />
          <Divider hidden />
          <Route exact path="/" component={ProductsList} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
