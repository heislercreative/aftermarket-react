import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/userActions'
import { Form, Button } from 'semantic-ui-react'

class AddToCart extends Component {
  constructor(props) {
    super(props)
    if (props.productIds.includes(parseInt(props.productId, 10))) {
      this.state = { buttonDisabled: true }
    } else {
      this.state = { buttonDisabled: false }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.actions.addToCart()
    this.setState({ buttonDisabled: true })
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
          <Button primary type='submit' disabled={this.state.buttonDisabled}>Add to Cart</Button>
        </Form>
        <br />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { productIds: state.user.cart.products.map(product => product.id) }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)
