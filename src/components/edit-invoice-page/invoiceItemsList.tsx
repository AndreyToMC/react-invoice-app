import * as React from 'react';
import {
  Col, Container, Form, Row,
} from 'reactstrap';
import DropBox from './dropBox';
import InputNumber from './inputNumber';

interface IinvoiceItemsList {
  invoiceItemsInputs: [],
  values: [],
  onItemListInputChange: () => void,
  getProductPrice: (product_id: number, quantity: number) => void,
  selected: number,
}

interface InvoiceItem {
  id?: number,
  quantity: number,
  product_id: number,
}

class InvoiceItemsList extends React.Component<IinvoiceItemsList> {
  render() {
    const { invoiceItemsInputs, values, onItemListInputChange, getProductPrice } = this.props;
    return (
      <React.Fragment>
        {invoiceItemsInputs ? invoiceItemsInputs.map((elem: InvoiceItem, i: number) => (
          <Row>
            <Col>
              <DropBox
                name='listItemProductInput'
                key={elem.id}
                id={elem.id}
                onChange={onItemListInputChange}
                selected={elem.product_id}
                values={values}
              />
            </Col>
            <Col>
              <InputNumber
                name='listItemQtyInput'
                key={elem.id}
                id={elem.id}
                onChange={onItemListInputChange}
                value={elem.quantity}
              />
            </Col>
            <Col>${getProductPrice(elem.product_id, elem.quantity) || '0.00'}</Col>
          </Row>
        )) : <p>items not found</p>}
      </React.Fragment>
    );
  }
}
export default InvoiceItemsList;
