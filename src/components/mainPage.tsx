import * as React from 'react';
import { Table } from 'reactstrap';

interface IMainPageInerface {
    invoices: [],
    customersNames: [],
    toInvoice: (event: React.MouseEvent<HTMLTableSectionElement>) => void
}

interface Iinvoice {
    id: any,
    customer_id: any,
    discount: any,
    total: any
}

class MainPage extends React.Component<IMainPageInerface, {}> {
  render() {
    const { invoices, customersNames, toInvoice} = this.props;
    return (
      <Table hover={true}>
        <thead>
        <tr>
          <th>Invoice ID</th>
          <th>Customer Name</th>
          <th>Discount(%)</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
        </thead>
        {invoices.length && invoices.map((elem: Iinvoice, i: number) => (
          <tbody key={i} onClick={toInvoice}>
          <tr id={elem.id}>
            <td scope='row' >{elem.id}</td>
            <td>{customersNames[elem.customer_id]}</td>
            <td>{elem.discount}%</td>
            <td>${elem.total}</td>
            <td> VIEW </td>
          </tr>
          </tbody>
        ))}
      </Table>
    );
  }
}

export default MainPage;
