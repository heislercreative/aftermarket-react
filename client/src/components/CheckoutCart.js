import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/userActions'
import { Form, Button } from 'semantic-ui-react'

class CheckoutCart extends Component {

  handleSubmit = async (e) => {
    e.preventDefault()
    await this.props.actions.checkoutCart(this.props)
    this.props.history.push('/order-confirmation')
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutCart))
