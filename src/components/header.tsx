import * as React from 'react';

import { Link } from 'react-router-dom';
import {
  Button, Nav, NavItem, NavLink,
} from 'reactstrap';

const Header = ({ toNewInvoice, invoicesCuont }) => (
  <Nav className='d-flex justify-content-around'>
    <NavItem>
        <Link to='/'>Logo</Link>
    </NavItem>
    <NavItem>
        <Link to='/products'>Products</Link>
    </NavItem>
    <NavItem>
        <Link to='/customers'>Customers</Link>
    </NavItem>
    <NavItem>
        <Link to='/invoices'>Invoices({invoicesCuont})</Link>
    </NavItem>
    <NavItem>
      <Button onClick={toNewInvoice} color='primary'>
          New Invoice
      </Button>
    </NavItem>
  </Nav>
);

export default Header;
