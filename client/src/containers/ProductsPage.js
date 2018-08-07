import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/productActions'

import { Header, Divider } from 'semantic-ui-react'
import Logo from '../components/Logo'
import ProductsList from '../components/ProductsList'

class ProductsPage extends Component {

  componentDidMount() {
    this.props.actions.fetchProducts()
  }

  render() {
    return (
      <div>
        <Header as='h2' textAlign='center'>
          <Logo /> Products
          <Divider hidden />
        </Header>
        <ProductsList page={'index'} products={this.props.products} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { products: state.products }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
