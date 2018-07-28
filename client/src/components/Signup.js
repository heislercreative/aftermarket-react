import React, { Component } from 'react'
import { Header, Container, Form, Label, Input, Button, Divider } from 'semantic-ui-react'
import StatesList from './StatesList'

class Signup extends Component {
  render() {
    return(
      <Container>
        <Header as='h2' textAlign='center'>
          Create a New Account
          <Divider hidden />
        </Header>
        <Form>
          <Input className='form-input' label='Email' placeholder='account@aftermarket.com' /><br/>
          <Input className='form-input' label='Password' placeholder='••••••••' type='password'/><br/>
          <Input className='form-input' label='First Name' placeholder='John' /><br/>
          <Input className='form-input' label='Last Name' placeholder='Doe' /><br/>
          <Input className='form-input' label='Address' placeholder='123 Main St' /><br/>
          <Input className='form-input' label='City' placeholder='Durnsville' /><br/>
          <Input className='form-input' list='states' label='State' placeholder='IN' />
            <StatesList /><br/>
          <Input className='form-input' label='Zip Code' placeholder='12345' width={2} /><br/><br/>
          <Button primary type='submit'>Sign Up</Button>
        </Form>
        <Divider horizontal section>OR</Divider>
        <Button secondary>Log In</Button>
      </Container>
    )
  }
}

export default Signup
