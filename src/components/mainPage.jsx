import React, { Component } from 'react';

import { Table } from 'reactstrap';

class MainPage extends Component {
  render() {
    return (
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
            <td>Otto</td>
            <td>@mdo</td>
            <td> VIEW</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default MainPage;
