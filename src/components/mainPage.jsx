import React, { Component } from 'react';

import { Table } from 'reactstrap';

const mainPage = ({ invoices, customersNames }) => (
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
        <td>{customersNames[elem.id]}</td>
        <td>{elem.discount}%</td>
        <td>${elem.total}</td>
        <td> VIEW </td>
      </tr>
      </tbody>
    ))
    }
  </Table>
);


export default mainPage;
