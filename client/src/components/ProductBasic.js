import React, { Component } from 'react'

class ProductBasic extends Component {
  render() {
    return (
      <a className='product-link' href='#'>
        <div className='product-div'>
          <img className='thumbnail-img' src={this.props.thumbnail} />
          <h4>{this.props.name}</h4>
          <strong>${this.props.price}</strong>
        </div>
      </a>
    )
  }
}

export default ProductBasic
