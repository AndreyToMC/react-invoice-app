import React, { Component } from 'react';

import { Table } from 'reactstrap';

const InvoicePage = ({ invoices, customersNames }) => (
  <Table hover>
    <thead>
      <tr>
        <th>Invoice ID</th>
        <th>Customer Name</th>
        <th>Discount(%)</th>
        <th>Total</th>
        <th>Actions</th>
      </tr>
    </thead>
    {invoices.length && invoices.map((elem, i) => (
      <tbody key={i}>
        <tr>
          <th scope="row">{elem.id}</th>
          <td>{customersNames[elem.customer_id]}</td>
          <td>{elem.discount}%</td>
          <td>${elem.total}</td>
          <td> VIEW EDIT DELETE </td>
        </tr>
      </tbody>
    ))
    }
  </Table>
);


export default InvoicePage;
