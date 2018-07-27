import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainMenu from './components/MainMenu'
import ProductsList from './containers/ProductsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu />
        <ProductsList />
      </div>
    );
  }
}

export default App;
