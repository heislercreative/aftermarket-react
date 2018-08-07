import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/userActions'
import { Form, Button } from 'semantic-ui-react'

class RemoveFromCart extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.actions.addToCart()
  }

  render(){
    return(
      <div>
        <Form id="add-to-cart" onSubmit={this.handleSubmit}>
          <input
            name='cart_id'
            type='hidden'
            value={this.props.cartId}
          />
          <input
            name='product_id'
            type='hidden'
            value={this.props.productId}
          />
          <Button type='submit'>X</Button>
        </Form>
        <br />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { cartId: state.user.cart.id }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFromCart)
