import React, { Component } from 'react'

class ProductBasic extends Component {
  render() {
    return (
      <div className='product-div'>
        <img className='thumbnail-img' src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <a href='#'><h4>Awesome Product</h4></a>
        <em>$70</em>
      </div>
    )
  }
}

export default ProductBasic
