import React from 'react'
import { Header, Container, Divider } from 'semantic-ui-react'

const OrderConfirmation = () =>
  <Container>
    <Header as='h2' textAlign='center'>
      Thank you for your order!
      <Divider hidden />
      <h3>Your item(s) will be shipped within 2 business days.</h3>
    </Header>
  </Container>

export default OrderConfirmation
