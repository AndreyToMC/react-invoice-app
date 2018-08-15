import React, { Component } from 'react';

import { Table } from 'reactstrap';

const InvoicePage = () => (
  <Table>
    <thead>
      <tr>
        <th>Invoice ID</th>
        <th>Customer Name</th>
        <th>Discount(%)</th>
        <th>Total</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>13</td>
        <td>55</td>
        <td> VIEW EDIT DELETE </td>
      </tr>
    </tbody>
  </Table>
);


export default InvoicePage;
