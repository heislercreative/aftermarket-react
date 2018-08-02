import React, { Component } from 'react'
import ProductBasic from '../components/ProductBasic'

class ProductsList extends Component {
  render() {
    return(
      <div className='page-container'>
        {this.props.products.map(product =>
          <ProductBasic
            name={product.name}
            price={product.price}
          />
        )}
      </div>
    )
  }
}

export default ProductsList
