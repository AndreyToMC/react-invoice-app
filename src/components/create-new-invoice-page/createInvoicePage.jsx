import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DropBox from './dropBox';
import InputNumber from './inputNumber';

class CreateInvoicePage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Row>Invoice #1</Row>
            <Container>
              <Row><DropBox onSelectChange={this.props.onCustomerChange} values={this.props.customers} id="customersInput" /></Row>
              <Row>
                <Col>Products</Col>
                <Col>Qty</Col>
                <Col>Price</Col>
              </Row>
              {this.props.productsInputCounter ? this.props.productsInputCounter.map((elem, id)=>{
                return (
                  <Row>
                      <Col><DropBox id={id} onSelectChange={this.props.onProductChange} values={this.props.products} /></Col>
                      <Col><InputNumber /></Col>
                      <Col>0.00</Col>
                  </Row>
                )
              })  : null}
            </Container>
            <Row>
              <Col>Total</Col>
              <Col>60$</Col>
            </Row>
          </Col>
          <Col>
            <Row>Discount %</Row>
            <Row><InputNumber /></Row>
          </Col>
        </Row>
        <Row>Save Invoice</Row>
      </Container>
    );
  }
}

export default CreateInvoicePage;
