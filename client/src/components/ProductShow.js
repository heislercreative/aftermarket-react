import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/productActions'
import AddToCart from '../components/AddToCart'

class ProductShow extends Component {

  componentDidMount() {
    this.props.actions.fetchProduct(this.props)
  }

  render() {
    const product = this.props.product
    return (
      <div className='product-div'>
        <h2>{product.name}</h2>
        <img src={product.img_full} alt={product.name} />
        <h3><em>${product.price}</em></h3>
        { this.props.cartId && <AddToCart cartId={this.props.cartId} productId={this.props.productId}/>}
        <p dangerouslySetInnerHTML={{__html: product.description}} />
      </div>
    )
  }

  componentWillUnmount() {
    this.props.actions.cleanupProduct()
  }
}

function mapStateToProps(state, ownProps) {
  if (state.user.hasOwnProperty('cart')) {
    return {
      cartId: state.user.cart.id,
      productId: ownProps.match.params.productId,
      product: state.currentProduct
    }
  } else {
    return {
      productId: ownProps.match.params.productId,
      product: state.currentProduct
    }
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)
