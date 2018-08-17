import React, { Component } from 'react';
import { Table } from 'reactstrap';

const ProductsPage = ({ products }) => (
  <Table hover>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {products.map(elem => (
        <tr>
          <td>{elem.name}</td>
          <td>{elem.price}</td>
        </tr>
      ))}
      <tr>
        <td>prduct</td>
        <td>35$</td>
      </tr>
    </tbody>
  </Table>
);

export default ProductsPage;
