import React, { Component } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import StatesList from './StatesList'

class AccountForm extends Component {
  render(){
    return(
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
        <Button primary type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default AccountForm
