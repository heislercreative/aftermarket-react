import React, { Component } from 'react'
import { Header, Container, Divider } from 'semantic-ui-react'
import AccountForm from './AccountForm'


class Signup extends Component {
  render() {
    return(
      <Container>
        <Header as='h2' textAlign='center'>
          Update Account Details
          <Divider hidden />
        </Header>
        <AccountForm formType={'updateUser'} />
      </Container>
    )
  }
}

export default Signup
