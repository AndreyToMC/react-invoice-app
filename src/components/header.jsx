import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Nav className='d-flex justify-content-around'>
        <NavItem>
          <NavLink>
            <Link to="/">Logo</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/products">Products</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/customers">Customers</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/invoices">Invoices(2)</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <Button color="primary">
            New Invoice
          </Button>
        </NavItem>
      </Nav>
    );
  }
}

export default Header;
