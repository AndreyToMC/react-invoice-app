import React from 'react';
import {
  Nav, NavItem, NavLink, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = ({ toNewInvoice, invoicesCuont }) => (
  <Nav className="d-flex justify-content-around">
    <NavItem>
        <Link to="/">Logo</Link>
    </NavItem>
    <NavItem>
        <Link to="/products">Products</Link>
    </NavItem>
    <NavItem>
        <Link to="/customers">Customers</Link>
    </NavItem>
    <NavItem>
        <Link to="/invoices">Invoices({invoicesCuont})</Link>
    </NavItem>
    <NavItem>
      <Button onClick={toNewInvoice} color="primary">
          New Invoice
      </Button>
    </NavItem>
  </Nav>
);

export default Header;
