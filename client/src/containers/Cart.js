import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/productActions'

import { Header, Container, Segment, Divider } from 'semantic-ui-react'
import ProductsList from '../components/ProductsList'

class Cart extends Component {
  render() {
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
              <ProductsList page={'cart'} products={this.props.products}/>
            </div>
            <div className='cart-right'>Total</div>
          </div>
        </Container>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { products: state.user.cart.products }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
