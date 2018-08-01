import React, { Component } from 'react'
import { Container, Form, Input, Button } from 'semantic-ui-react'
import StatesList from './StatesList'

class AccountForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password:'',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      stateInitials: '',
      zip: ''
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

  render(){
    return(
      <div className='form-container'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
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
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>First Name</label>
              <input
                name='firstName'
                type='text'
                placeholder='John'
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input
                name='lastName'
                type='text'
                placeholder='Doe'
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Address</label>
            <input
              name='address'
              type='text'
              placeholder='123 Main St'
              value={this.state.address}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Group>
            <Form.Field className='city-input'>
              <label>City</label>
              <input
                name='city'
                type='text'
                placeholder='Durnsville'
                value={this.state.city}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field className='state-input'>
              <label>State</label>
              <input
                name='stateInitials'
                className='ui fluid dropdown'
                list='states'
                placeholder='IN'
                maxlength='2'
                value={this.state.stateInitials}
                onChange={this.handleChange}
              />
                <StatesList />
            </Form.Field>
            <Form.Field className='zip-input'>
              <label>Zip Code</label>
              <input
                name='zip'
                type='text'
                placeholder='12345'
                maxlength='5'
                value={this.state.zip}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <br />
          <Button primary type='submit'>Submit</Button>
        </Form>
        {this.state.email}<br />
        {this.state.password}<br />
        {this.state.firstName}<br />
        {this.state.lastName}<br />
        {this.state.address}<br />
        {this.state.city}<br />
        {this.state.stateInitials}<br />
        {this.state.zip}<br />
      </div>
    )
  }
}

export default AccountForm
