import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/userActions'
import { Form, Button } from 'semantic-ui-react'
import StatesList from './StatesList'

class AccountForm extends Component {
  constructor(props) {
    super(props)
    if (props.formType === 'createUser') {
      this.state = {
        email: '',
        password: '',
        password_placeholder: '•••••••',
        first_name: '',
        last_name: '',
        address: '',
        city: '',
        state_initials: '',
        zip: ''
      }
    } else if (props.formType === 'updateUser') {
      this.state = {
        email: props.user.email,
        password: '',
        password_placeholder: 'Please re-enter or change password',
        first_name: props.user.first_name,
        last_name: props.user.last_name,
        address: props.user.address,
        city: props.user.city,
        state_initials: props.user.state_initials,
        zip: props.user.zip
      }
    }

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    if (this.props.formType === 'createUser') {
      await this.props.actions.createUser()
      this.props.history.push('/')
    } else if (this.props.formType === 'updateUser') {
      await this.props.actions.updateUser(this.props)
      this.props.history.push('/account-confirmation')
    }
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
                placeholder={this.state.password_placeholder}
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
          <input
            name='token'
            type='hidden'
            value={this.props.user.token}
          />
          <br />
          <Button primary type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountForm))
