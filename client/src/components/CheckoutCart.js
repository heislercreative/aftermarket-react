import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/userActions'
import { Form, Button } from 'semantic-ui-react'

class CheckoutCart extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.actions.checkoutCart(this.props)
  }

  render(){
    return(
      <div>
        <Form id="checkout-cart" onSubmit={this.handleSubmit}>
          <input
            name='cart_id'
            type='hidden'
            value={this.props.cartId}
          />
          {/* <input
            name='product_ids'
            type='hidden'
            value={this.props.productIds}
          /> */}
          <Button type='submit' fluid inverted>Confirm Order</Button>
        </Form>
        <br />
        {this.props.productIds}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cartId: state.user.cart.id,
    // productIds: state.user.cart.products.map(product => product.id)
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCart)
