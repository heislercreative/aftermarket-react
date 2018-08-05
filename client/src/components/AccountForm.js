import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import StatesList from './StatesList'

class AccountForm extends Component {
  constructor(props) {
    super(props)
    if (props.formType === 'createUser') {
      this.state = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        address: '',
        city: '',
        state_initials: '',
        zip: ''
      }
    } else {
      this.state = {
        email: 'email',
        password: 'password',
        first_name: 'firstname',
        last_name: 'lastname',
        address: 'address',
        city: 'city',
        state_initials: 'st',
        zip: 'zipco'
      }
    }

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/users', {
      method: 'POST',
      body: new FormData(document.getElementById("user-form")),
      credentials: 'same-origin'
    })
    .then(resp => console.log(resp))
  }

  render(){
    return(
      <div className='form-container'>
        <Form id="user-form" onSubmit={this.handleSubmit}>
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
                name='first_name'
                type='text'
                placeholder='John'
                value={this.state.first_name}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input
                name='last_name'
                type='text'
                placeholder='Doe'
                value={this.state.last_name}
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
                name='state_initials'
                className='ui fluid dropdown'
                list='states'
                placeholder='IN'
                maxLength='2'
                value={this.state.state_initials}
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
                maxLength='5'
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
        {this.state.first_name}<br />
        {this.state.last_name}<br />
        {this.state.address}<br />
        {this.state.city}<br />
        {this.state.state_initials}<br />
        {this.state.zip}<br />
        {this.props.formType}<br />
      </div>
    )
  }
}

export default AccountForm
