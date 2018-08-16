import React, { Component } from 'react';
import {
  Container, Row, Col, Form,
} from 'reactstrap';
import DropBox from './dropBox';
import InputNumber from './inputNumber';
import InvoiceItemsList from './invoiceItemsList';

class CreateInvoicePage extends Component {
  render() {
    const {
      onAddInputsChange,
      customers,
      customerInputValue,
      products,
      productInputValue,
      qtyInputValue,
      invoiceItemsInputs,
      onItemListInputChange,
      discountInput,
      totalPrice,
    } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <Row>Invoice #1</Row>
            <Container>
              <DropBox selected={customerInputValue} onChange={onAddInputsChange} values={customers} placeholder="Select Name" name="customerInput" key="customerInput" />
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
              <InvoiceItemsList onItemListInputChange={onItemListInputChange} invoiceItemsInputs={invoiceItemsInputs} onChange={onAddInputsChange} values={products} />
              <Row>
                <Col>
                  <DropBox selected={productInputValue} onChange={onAddInputsChange} values={products} placeholder="Add Product" name="productInput" key="productInput" />
                </Col>
                <Col><InputNumber value={qtyInputValue} name="qtyInput" onChange={onAddInputsChange} /></Col>
                <Col>$0.00</Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>Total</Col>
                <Col>{totalPrice}</Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Row>Discount %</Row>
            <Row><InputNumber value={discountInput} name="discountInput" onChange={onAddInputsChange}/></Row>
          </Col>
        </Row>
        <Row>Save Invoice</Row>
      </Container>
    );
  }
}

export default CreateInvoicePage;
