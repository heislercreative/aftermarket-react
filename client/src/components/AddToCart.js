import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/userActions'
import { Form, Button } from 'semantic-ui-react'

class AddToCart extends Component {

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
            value={this.props.userId}
          />
          <input
            name='product_id'
            type='hidden'
            value={this.props.productId}
          />
          <Button primary type='submit'>Add to Cart</Button>
        </Form>
        <br />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)
