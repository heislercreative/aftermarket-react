import React, { Component } from 'react'
import ProductBasic from '../components/ProductBasic'

class ProductsList extends Component {
  render() {
    return(
      <div className='page-container'>
        {this.props.products.map(product =>
          <ProductBasic
            name={product.name}
            thumbnail={product.img_thumbnail}
            price={product.price}
          />
        )}
      </div>
    )
  }
}

export default ProductsList
