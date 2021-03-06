import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, UncontrolledDropdown, NavItem, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import avatar from '../../assets/img/avatars/6.jpg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>
        {this.props.isAuthenticated && this.props.user && (
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <span>{this.props.user.name}</span>
              <img src={this.props.user.picture} className="img-avatar" alt={this.props.user.email} />
            </DropdownToggle>

            <DropdownMenu right style={{ right: 0 }}>
              <Link to="/profile"><DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem></Link>
              <DropdownItem onClick={this.props.logout}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        )}
        {!this.props.isAuthenticated && (
          <NavItem>
            <Button
              id="qsLoginBtn"
              color="primary"
              className="btn-margin"
              onClick={this.props.login}
            >
              Log in
            </Button>
          </NavItem>
        )}
        </Nav>
        <AppAsideToggler className="d-md-down-none" defaultOpen />
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
