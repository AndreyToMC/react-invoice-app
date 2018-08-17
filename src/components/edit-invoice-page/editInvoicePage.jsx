import React, { Component } from 'react';
import {
  Container, Row, Col, Form, Button,
} from 'reactstrap';
import DropBox from './dropBox';
import InputNumber from './inputNumber';
import InvoiceItemsList from './invoiceItemsList';

class CreateInvoicePage extends Component {
  render() {
    const {
      onAddInputsChange,
      onItemListInputChange,
      customers,
      customerInputValue,
      products,
      productInputValue,
      qtyInputValue,
      invoiceItemsInputs,
      discountInput,
      totalPrice,
      invoicesId,
      getProductPrice,
    } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <Row>
              Invoice #
              {invoicesId}
            </Row>
            <Container>
              <DropBox selected={customerInputValue} onChange={onAddInputsChange} values={customers} placeholder="Select Name" name="customerInput" key="customerInput" />
              <Row className="text-danger" />
              <Row>
                <Col>
                  Products
                </Col>
                <Col>
                  Qty
                </Col>
                <Col>
                  Price
                </Col>
              </Row>
              <Row className="text-danger" />
              <InvoiceItemsList getProductPrice={getProductPrice} onItemListInputChange={onItemListInputChange} invoiceItemsInputs={invoiceItemsInputs} onChange={onAddInputsChange} values={products} />
              <Row>
                <Col>
                  <DropBox selected={productInputValue} onChange={onAddInputsChange} values={products} placeholder="Add Product" name="productInput" key="productInput" />
                </Col>
                <Col><InputNumber value={qtyInputValue} name="qtyInput" onChange={onAddInputsChange} /></Col>
                <Col>$0.00</Col>
              </Row>
            </Container>
            <Container>
              <Row className="text-danger" />
              <Row>
                <Col>Total</Col>
                <Col>{totalPrice}</Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Row>Discount %</Row>
            <Row><InputNumber value={discountInput} name="discountInput" onChange={onAddInputsChange} /></Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateInvoicePage;
