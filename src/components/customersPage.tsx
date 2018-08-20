import * as React from 'react';
import { Table } from 'reactstrap';

const CustomersPage = ({ customers }) => (
  <Table hover={true}>
    <thead>
      <tr>
        <th>Customer Name</th>
        <th>Customer Address</th>
        <th>Customer Phone number</th>
      </tr>
    </thead>
    <tbody>
      {customers.map((elem) => (
        <tr>
          <td>{elem.name}</td>
          <td>{elem.address}</td>
          <td>{elem.phone}</td>
        </tr>
      ))}

      <tr>
        <td>Name</td>
        <td>Address</td>
        <td>Phone number</td>
      </tr>
    </tbody>
  </Table>
);

export default CustomersPage;
