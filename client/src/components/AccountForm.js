import React, { Component } from 'react'
import { Container, Form, Input, Button } from 'semantic-ui-react'
import StatesList from './StatesList'

class AccountForm extends Component {
  render(){
    return(
      <div className='form-container'>
        <Form>
          <Form.Group widths='equal' className='form-input'>
            <Form.Field>
              <label>Email</label>
              <input type='text' placeholder='account@aftermarket.com' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type='password' placeholder='••••••••'/>
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal' className='form-input'>
            <Form.Field>
              <label>First Name</label>
              <input type='text' placeholder='John' />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input type='text' placeholder='Doe'/>
            </Form.Field>
          </Form.Group>
          <Form.Field className='form-input'>
            <label>Address</label>
            <input type='text' placeholder='123 Main St' />
          </Form.Field>
          <Form.Field className='form-input'>
            <label>City</label>
            <input type='text' placeholder='Durnsville' />
          </Form.Field>
          <Form.Group className='form-input'>
            <Form.Field className='state-input'>
              <label>State</label>
              <select className='ui fluid dropdown'>
                <option value=""></option>
                <option value="AL">Alabama</option>
              	<option value="AK">Alaska</option>
              	<option value="AZ">Arizona</option>
              	<option value="AR">Arkansas</option>
              	<option value="CA">California</option>
              	<option value="CO">Colorado</option>
              	<option value="CT">Connecticut</option>
              	<option value="DE">Delaware</option>
              	<option value="DC">District Of Columbia</option>
              	<option value="FL">Florida</option>
              	<option value="GA">Georgia</option>
              	<option value="HI">Hawaii</option>
              	<option value="ID">Idaho</option>
              	<option value="IL">Illinois</option>
              	<option value="IN">Indiana</option>
              	<option value="IA">Iowa</option>
              	<option value="KS">Kansas</option>
              	<option value="KY">Kentucky</option>
              	<option value="LA">Louisiana</option>
              	<option value="ME">Maine</option>
              	<option value="MD">Maryland</option>
              	<option value="MA">Massachusetts</option>
              	<option value="MI">Michigan</option>
              	<option value="MN">Minnesota</option>
              	<option value="MS">Mississippi</option>
              	<option value="MO">Missouri</option>
              	<option value="MT">Montana</option>
              	<option value="NE">Nebraska</option>
              	<option value="NV">Nevada</option>
              	<option value="NH">New Hampshire</option>
              	<option value="NJ">New Jersey</option>
              	<option value="NM">New Mexico</option>
              	<option value="NY">New York</option>
              	<option value="NC">North Carolina</option>
              	<option value="ND">North Dakota</option>
              	<option value="OH">Ohio</option>
              	<option value="OK">Oklahoma</option>
              	<option value="OR">Oregon</option>
              	<option value="PA">Pennsylvania</option>
              	<option value="RI">Rhode Island</option>
              	<option value="SC">South Carolina</option>
              	<option value="SD">South Dakota</option>
              	<option value="TN">Tennessee</option>
              	<option value="TX">Texas</option>
              	<option value="UT">Utah</option>
              	<option value="VT">Vermont</option>
              	<option value="VA">Virginia</option>
              	<option value="WA">Washington</option>
              	<option value="WV">West Virginia</option>
              	<option value="WI">Wisconsin</option>
              	<option value="WY">Wyoming</option>
              </select>
            </Form.Field>
            <Form.Field>
              <label>Zip Code</label>
              <input type='text' placeholder='12345'/>
            </Form.Field>
          </Form.Group>
          <br />
          <Button primary type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default AccountForm
