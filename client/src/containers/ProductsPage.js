import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Header, Divider } from 'semantic-ui-react'
import Logo from '../components/Logo'
import ProductsList from '../components/ProductsList'
import ProductShow from '../components/ProductShow'

class ProductsPage extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch(`/api/products`)
        .then(resp => resp.json())
        .then(products => this.setState({ products }))
  }

  render() {
    return(
      <div>
        <Header as='h2' textAlign='center'>
          <Logo /> Products
          <Divider hidden />
        </Header>
        <ProductsList products={this.state.products} />
        <Route path={`${this.props.match.url}/:productId`} component={ProductShow} />
      </div>
    )
  }
}

export default ProductsPage
