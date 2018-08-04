import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/productActions'

import { Divider } from 'semantic-ui-react'
import './App.css';

import MainMenu from './components/MainMenu'
import ProductsPage from './containers/ProductsPage'
import Account from './components/Account'
import Cart from './containers/Cart'
import Login from './components/Login'
import Signup from './components/Signup'

class App extends Component {

  componentDidMount() {
    this.props.actions.fetchProducts()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <MainMenu />
          <Divider hidden />
          <Redirect from="/" to="/products" />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
