import React from 'react';
import {
  Container, Row, Col, Form,
} from 'reactstrap';
import DropBox from './dropBox';
import InputNumber from './inputNumber';

class InvoiceItemsList extends React.Component {
  render() {
    const { invoiceItemsInputs, values, onItemListInputChange } = this.props;
    return (
      <React.Fragment>
        {invoiceItemsInputs ? invoiceItemsInputs.map((elem, i) => (
          <Row>
            <Col>
              <DropBox name='listItemProductInput' key={i} id={i} onChange={onItemListInputChange} selected={elem.productId} values={values}/>
            </Col>
            <Col><InputNumber name='listItemQtyInput' key={i} id={i} onChange={onItemListInputChange} value={elem.qtyValue}/></Col>
            <Col>${elem.productPriceTotal?elem.productPriceTotal: '0.00'}</Col>
          </Row>
        )) : <p>items not found</p>}
      </React.Fragment>
    );
  }
}
export default InvoiceItemsList;
