import React, { Component } from 'react'
import { Header, Container, Segment, Divider } from 'semantic-ui-react'

class Cart extends Component {
  render() {
    return(
      <div>
        <Container>
          <Header as='h2' textAlign='center'>
            Your Cart
            <Divider hidden />
          </Header>
          <div className='cart-container'>
            <Divider />
            <div className='cart-left'>Items</div>
            <div className='cart-right'>Total</div>
          </div>
        </Container>
      </div>
    )
  }
}


export default Cart
