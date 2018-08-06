import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/productActions'

import { Divider } from 'semantic-ui-react'
import './App.css';

import LoggedInMenu from './components/LoggedInMenu'
import LoggedOutMenu from './components/LoggedOutMenu'
import ProductsPage from './containers/ProductsPage'
import Account from './components/Account'
import Cart from './containers/Cart'
import Login from './components/Login'
import Signup from './components/Signup'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          { this.props.token && <LoggedInMenu /> }
          { !this.props.token && <LoggedOutMenu /> }
          <Divider hidden />
          <Route exact path="/" component={ProductsPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cart" component={Cart} />
          {this.props.token}
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.user.token }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
