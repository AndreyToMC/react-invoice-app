import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class CreateInvoicePage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Row>Invoice #1</Row>
                        <Row>Mark Benson</Row>
                        <Row>
                            <Col>Products</Col>
                            <Col>Qty</Col>
                            <Col>Price</Col>
                        </Row>
                        <Row>
                            <Col>Products</Col>
                            <Col>Qty</Col>
                            <Col>Price</Col>
                        </Row>
                        <Row>
                            <Col>Products</Col>
                            <Col>Qty</Col>
                            <Col>Price</Col>
                        </Row>
                        <Row>
                            <Col>Total</Col>
                            <Col>60$</Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>Discount %</Row>
                        <Row>13</Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CreateInvoicePage;
