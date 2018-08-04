import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Header, Divider } from 'semantic-ui-react'
import Logo from '../components/Logo'
import ProductsList from '../components/ProductsList'
import ProductShow from '../components/ProductShow'

const ProductsPage = ({ match, products }) =>
  // constructor() {
  //   super()
  //   this.state = {
  //     products: []
  //   }
  // }

  // componentDidMount() {
  //   fetch(`/api/products`)
  //       .then(resp => resp.json())
  //       .then(products => this.setState({ products }))
  // }

  <div>
    <Header as='h2' textAlign='center'>
      <Logo /> Products
      <Divider hidden />
    </Header>
    <ProductsList products={products} />
    {/* <Switch>
      <Route path={`${match.url}/:productId`} component={ProductShow} />
    </Switch> */}
  </div>

export default ProductsPage
