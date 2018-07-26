import React, { Component } from 'react'
import { Menu, Header, Icon } from 'semantic-ui-react'

export default class MainMenu extends Component {
  state = { activeItem: 'home' }

  handleMenuClick = (e, { name }) => this.setState({
    activeItem: name
  })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='home'
          color='orange'
          active={activeItem === 'home'}
          onClick={this.handleMenuClick}
        ><Icon fitted name='recycle'/>FTERMARKET</Menu.Item>
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
    )
  }
}
