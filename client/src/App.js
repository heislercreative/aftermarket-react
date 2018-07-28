import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'
import './App.css';
import MainMenu from './components/MainMenu'
import ProductsList from './containers/ProductsList'
import Account from './components/Account'
import Login from './components/Login'
import Signup from './components/Signup'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainMenu />
          <Divider hidden />
          <Route exact path="/" component={ProductsList} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
