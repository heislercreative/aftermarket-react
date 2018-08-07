import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/userActions'
import { Form, Button } from 'semantic-ui-react'

class AddToCart extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('added to cart')
  }

  render(){
    return(
      <div className='form-container'>
        <Form id="add-to-cart" onSubmit={this.handleSubmit}>
          <Button primary type='submit'>Add to Cart</Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)
