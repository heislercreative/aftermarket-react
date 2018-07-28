import React, { Component } from 'react'
import { Header, Container, Button, Divider } from 'semantic-ui-react'
import AccountForm from './AccountForm'


class Signup extends Component {
  render() {
    return(
      <Container>
        <Header as='h2' textAlign='center'>
          Create a New Account
          <Divider hidden />
        </Header>
        <AccountForm />
        <Divider horizontal section>OR</Divider>
        <Button secondary>Log In</Button>
      </Container>
    )
  }
}

export default Signup
