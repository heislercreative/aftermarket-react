import React, { Component } from 'react'
import { Header, Grid, Image, Divider } from 'semantic-ui-react'
import Logo from '../components/Logo'
import ProductBasic from '../components/ProductBasic'

class ProductsList extends Component {
  render() {
    return(
      <div>
        <Header as='h2' textAlign='center'>
          <Logo /> Products
          <Divider hidden />
        </Header>
        <div className='page-container'>
          <ProductBasic />
          <ProductBasic />
          <ProductBasic />
          <ProductBasic />
        </div>
      </div>
    )
  }
}


export default ProductsList
