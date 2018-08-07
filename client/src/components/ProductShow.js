import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/productActions'

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
        <p dangerouslySetInnerHTML={{__html: product.description}} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    userId: state.user.id,
    productId: ownProps.match.params.productId,
    product: state.currentProduct
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)
