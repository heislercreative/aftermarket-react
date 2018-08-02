import React, { Component } from 'react'

class ProductBasic extends Component {
  render() {
    return (
      <div className='product-div'>
        <img className='thumbnail-img' src={this.props.thumbnail} />
        <a href='#'><h4>{this.props.name}</h4></a>
        <strong>${this.props.price}</strong>
      </div>
    )
  }
}

export default ProductBasic
