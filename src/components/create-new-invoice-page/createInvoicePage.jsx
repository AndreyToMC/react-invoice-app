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
              <Row>
                <Col><DropBox defaultValue={this.props.productsInput} id="productsInput" onSelectChange={this.props.onProductChange} values={this.props.products} /></Col>
                <Col><InputNumber onChange={this.props.onQtyInputChange} id="qtyInput" value={this.props.qtyInputValue} /></Col>
                <Col>{this.props.productPriceWithQty.toFixed(2)}</Col>
                <Col onClick={this.props.addProduct}>Add</Col>
              </Row>
              <Row>{this.props.error ? <p className="text-danger">{this.props.error}</p> : null}</Row>
              {this.props.invoiceItems && this.props.invoiceItems.map((elem) => {
                return(
                    <Row>
                        <Col><DropBox defaultValue={elem.productId} id="productsInput" onSelectChange={this.props.onProductChange} values={this.props.products} /></Col>
                        <Col><InputNumber onChange={this.props.onQtyInputChange} id="qtyInput" value={parseInt(elem.quantity)} /></Col>
                        <Col>${elem.price.toFixed(2)}</Col>
                        <Col>delete</Col>
                    </Row>
                )
                })
              }
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
