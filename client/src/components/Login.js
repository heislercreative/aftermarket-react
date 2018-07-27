import React, { Component } from 'react'
import { Header, Container, Form, Input, Button, Divider } from 'semantic-ui-react'

class Login extends Component {
  render() {
    return(
      <Container>
        <Header as='h2' textAlign='center'>
          Log In To Your Account
          <Divider hidden />
        </Header>
        <Form>
          <p><Input className='form-input' label='&nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;' placeholder='account@aftermarket.com' /></p>
          <p><Input className='form-input' label='Password' placeholder='••••••••' type='password'/></p><br/>
          <Button primary type='submit'>Log In</Button>
        </Form>
        <Divider horizontal section>OR</Divider>
        <Button secondary>Sign Up</Button>
      </Container>
    )
  }
}

export default Login
