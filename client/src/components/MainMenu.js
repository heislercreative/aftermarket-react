import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Sticky, Icon } from 'semantic-ui-react'
import Logo from './Logo'

class MainMenu extends Component {
  state = { activeItem: 'home' }

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
          <Menu.Item
            as={Link} to='/account'
            name='account'
            active={activeItem === 'account'}
            onClick={this.handleMenuClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              as={Link} to='/cart'
              name='cart'
              active={activeItem === 'cart'}
              onClick={this.handleMenuClick}
            ><Icon name='shopping cart' />Cart</Menu.Item>
            <Menu.Item
              as={Link} to='/login'
              name='log-in-out'
              active={activeItem === 'log-in-out'}
              onClick={this.handleMenuClick}
            >Log In/Out </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Sticky>
    )
  }
}

export default MainMenu
