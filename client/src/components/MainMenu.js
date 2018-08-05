import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/userActions'
import { Link } from 'react-router-dom'
import { Menu, Sticky, Icon } from 'semantic-ui-react'
import Logo from './Logo'

class MainMenu extends Component {
  state = { activeItem: 'home' }

  handleMenuClick = (e, { name }) => this.setState({
    activeItem: name
  })

  handleLogout = (e) => {
    e.preventDefault()
    this.props.actions.logoutUser()
  }

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
              name='log-in'
              active={activeItem === 'log-in'}
              onClick={this.handleMenuClick}
            >Log In </Menu.Item>
            <Menu.Item
              name='log-out'
              active={activeItem === 'log-out'}
              onClick={this.handleLogout}
            >Log Out </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Sticky>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)
