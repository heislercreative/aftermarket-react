import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/userActions'
import { Form, Button } from 'semantic-ui-react'

class RemoveFromCart extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.actions.removeFromCart(this.props)
  }

  render(){
    return(
      <div>
        <Form id={'remove-from-cart-' + this.props.productId} onSubmit={this.handleSubmit}>
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
          <Button
            className='removal-badge'
            type='submit'
            compact={true}
            circular={true}
            color='blue'
          >
            <span className='badge-x'>x</span>
          </Button>
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
