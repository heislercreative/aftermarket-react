import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/productActions'

import { Header, Container, Segment, Divider } from 'semantic-ui-react'
import ProductsList from '../components/ProductsList'

class Cart extends Component {
  render() {
    const user = this.props.user
    return(
      <div>
        <Container>
          <Header as='h2' textAlign='center'>
            Your Cart
            <Divider hidden />
          </Header>
          <div className='page-container'>
            <Divider />
            <div className='cart-left'>
              <ProductsList page={'cart'} products={user.cart.products}/>
            </div>
            <div className='cart-right'>
              <h3>Total: <em>${this.props.total}</em></h3>
              <Divider className='cart-divider' />
              <h3>Address:</h3>
              {user.first_name} {user.last_name}<br />
              {user.address}<br />
              {user.city}, {user.state_initials} {user.zip}<br />
            </div>
          </div>
        </Container>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    user: state.user,
    total: state.user.cart.products.map(product => product.price).reduce((a, b) => a + b, 0)
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
