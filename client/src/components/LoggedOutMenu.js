import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Sticky } from 'semantic-ui-react'
import Logo from './Logo'

class LoggedOutMenu extends Component {
  state = {
    activeItem: 'home'
  }

  handleMenuClick = (e, { name }) => this.setState({
    activeItem: name
  })

  render() {
    const { activeItem } = this.state

    return (
      <Sticky>
        <Menu>
          <Menu.Item
            as={Link} to='/products'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleMenuClick}
          ><Logo /></Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              as={Link} to='/login'
              name='log-in'
              active={activeItem === 'log-in'}
              onClick={this.handleMenuClick}
            >Log In </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Sticky>
    )
  }
}

export default LoggedOutMenu
