import React, { Component } from 'react';

import { Table } from 'reactstrap';

const InvoicePage = ({ invoices, customersNames, toInvoice }) => (
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
      <tbody key={i} onClick={toInvoice} >
        <tr id={elem.id}>
          <td scope="row">{elem.id}</td>
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
