import React from 'react'
import { Header, Container, Divider } from 'semantic-ui-react'
import AccountForm from './AccountForm'


const Signup = () =>
  <Container>
    <Header as='h2' textAlign='center'>
      Update Account Details
      <Divider hidden />
    </Header>
    <AccountForm formType={'updateUser'} />
  </Container>

export default Signup
