import React, { Component } from 'react'
import { Menu, Sticky, Icon, Divider } from 'semantic-ui-react'
import Logo from './Logo'

export default class MainMenu extends Component {
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
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleMenuClick}
        ><Logo /></Menu.Item>
        <Menu.Item
          name='account'
          active={activeItem === 'account'}
          onClick={this.handleMenuClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='cart'
            active={activeItem === 'cart'}
            onClick={this.handleMenuClick}
          ><Icon name='shopping cart' />Cart</Menu.Item>
          <Menu.Item
            name='log-in-out'
            active={activeItem === 'log-in-out'}
            onClick={this.handleMenuClick}
          >Log In/Out </Menu.Item>
      </Menu.Menu>
      </Menu>
      <Divider hidden />
      </Sticky>
    )
  }
}
