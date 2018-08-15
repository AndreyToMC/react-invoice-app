import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateInvoicePage from '../components/create-new-invoice-page/createInvoicePage';

class CreateInvoicePageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsPriceById:{

            },
            errorValidation:'',
            customerInput: '',
            productsInput: '',
            qtyInput:0,
            productPriceWithQty:0.00,
            invoiceItems: []
        };
    }
    componentDidMount() {
        setTimeout(()=>{
          let productsPriceById = this.getProductsPriceById(this.props.products)
            this.setState({productsPriceById: productsPriceById})
        },10)
    }
    onCustomerChange = (e) => {
        this.setState({ customerInput: e.target.value})
    }
    onProductChange = (e) => {
        let productId = e.target.value
        let productPriceWithQty = this.state.productsPriceById[productId]*this.state.qtyInput
        console.log(productPriceWithQty)
        this.setState({productsInput: productId, productPriceWithQty})
    }

    onQtyInputChange = (e) => {
        let quantity = e.target.value
        let productId = this.state.productsInput
        if(productId && quantity>=0 ){
            let productPriceWithQty = this.state.productsPriceById[productId]*quantity
            this.setState({qtyInput: quantity, productPriceWithQty})
        }
    }
    addProduct = (e) => {
        console.log(e.target)
        let {productsInput, qtyInput, customerInput, productPriceWithQty} = this.state

        !qtyInput && this.setState({errorValidation: 'please set quantity'})
        !productsInput && this.setState({errorValidation: 'please set product'})
        !customerInput && this.setState({errorValidation: 'please set customer'})

        if ( qtyInput && productsInput && customerInput){
            this.setState( (prevState)=> {
                let state = Object.assign({}, prevState)
                state.errorValidation = ''
                state.invoiceItems.push({productId: productsInput, quantity: qtyInput, price: productPriceWithQty})
                state.productsInput = 'default'
                state.qtyInput = 0
                state.productPriceWithQty = 0.00
                return state
            })
        }

    }
    getProductsPriceById = (products) => {
        var productsPriceById = {}
        products.forEach(elem => {
            let id = elem.id;
            let price = elem.price;
            console.log(id, price)
            productsPriceById[id] = price
        })
        return productsPriceById
    }

    render() {
        console.log(this.state)
        return (
            <CreateInvoicePage
                error={this.state.errorValidation}
                addProduct={this.addProduct}
                productsInput={this.state.productsInput}
                onProductChange={this.onProductChange}
                onCustomerChange={this.onCustomerChange}
                customers={this.props.customers}
                products={this.props.products}
                qtyInputValue={this.state.qtyInput}
                onQtyInputChange={this.onQtyInputChange}
                productPriceWithQty={this.state.productPriceWithQty}
                invoiceItems={this.state.invoiceItems}
            />
        );
    }
}

function mapStateToProps(state) {
    return { customers: state.customers, products: state.products };
}

export default connect(
    mapStateToProps,

)(CreateInvoicePageContainer);
