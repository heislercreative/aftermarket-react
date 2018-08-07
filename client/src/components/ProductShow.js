import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/productActions'

class ProductShow extends Component {

  componentDidMount() {
    this.props.actions.fetchProduct(this.props)
  }

  render() {
    return (
      <div className='product-div'>
        <h3>Test #{this.props.productId}</h3>

        <em>$so</em>
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
