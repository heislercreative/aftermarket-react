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
          <Button
            type='submit'
            fluid
            inverted
            disabled={this.props.disabled}
          >
            Confirm Order
          </Button>
        </Form>
        <br />
        {this.props.productIds}
      </div>
    )
  }
}

function mapStateToProps(state) {
  if (state.user.cart.products.length > 0) {
    return {
      cartId: state.user.cart.id,
      disabled: false
    }
  } else {
    return {
      cartId: state.user.cart.id,
      disabled: true
    }
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCart)
