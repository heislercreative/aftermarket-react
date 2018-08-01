import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Container, Form, Input, Button, Divider } from 'semantic-ui-react'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password:''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return(
      <Container>
        <Header as='h2' textAlign='center'>
          Log In To Your Account
          <Divider hidden />
        </Header>
        <div className='login-form-container'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Email</label>
              <input
                name='email'
                type='text'
                placeholder='account@aftermarket.com'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                name='password'
                type='password'
                placeholder='••••••••'
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Field>
            <br />
            <Button primary type='submit'>Log In</Button>
          </Form>
          {this.state.email}<br />
          {this.state.password}<br />
        </div>
        <Divider horizontal section>OR</Divider>
        <Button as={Link} to='/signup' secondary>Sign Up</Button>
      </Container>
    )
  }
}

export default Login
