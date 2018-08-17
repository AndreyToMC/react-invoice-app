import React from 'react';
import {
  Container, Row, Col, Form,
} from 'reactstrap';
import DropBox from './dropBox';
import InputNumber from './inputNumber';

class InvoiceItemsList extends React.Component {
  render() {
    const { invoiceItemsInputs, values, onItemListInputChange, getProductPrice } = this.props;
    return (
      <React.Fragment>
        {invoiceItemsInputs ? invoiceItemsInputs.map((elem, i) => (
          <Row>
            <Col>
              <DropBox name='listItemProductInput' key={elem.id} id={elem.id} onChange={onItemListInputChange} selected={elem.product_id} values={values}/>
            </Col>
            <Col><InputNumber name='listItemQtyInput' key={elem.id} id={elem.id} onChange={onItemListInputChange} value={elem.quantity}/></Col>
            <Col>${getProductPrice(elem.product_id, elem.quantity) || '0.00'}</Col>
          </Row>
        )) : <p>items not found</p>}
      </React.Fragment>
    );
  }
}
export default InvoiceItemsList;
