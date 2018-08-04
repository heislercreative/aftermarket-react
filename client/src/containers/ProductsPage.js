import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Header, Divider } from 'semantic-ui-react'
import Logo from '../components/Logo'
import ProductsList from '../components/ProductsList'
import ProductShow from '../components/ProductShow'

const ProductsPage = ({ match, products }) =>
  <div>
    <Header as='h2' textAlign='center'>
      <Logo /> Products
      <Divider hidden />
    </Header>
    <ProductsList products={products} />
    <Route path={`${match.url}/:productId`} component={ProductShow} />
    {match.url}
  </div>

function mapStateToProps(state) {
  return { products: state.products }
}

export default connect(mapStateToProps)(ProductsPage)
