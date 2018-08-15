import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateInvoicePage from '../components/create-new-invoice-page/createInvoicePage';

class CreateInvoicePageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerInput: '',
            productsInputs: [''],
        };
    }
    onCustomerChange = (e) => {
        this.setState({ customerInput: e.target.value})
    }
    onProductChange = (e) => {
        const inputId = e.target.id
        const productId = e.target.value
        this.setState( (state, next) => {
            let newState = Object.assign({}, state)
            newState.productsInputs = newState.productsInputs.filter(elem => elem !== '')
            newState.productsInputs[inputId] = productId
            var count = newState.productsInputs.reduce((prev, elem)=>{
                if(elem !== ''){
                    return prev
                } else return prev += 1
            },0)
            if(count < 1 ) {
                newState.productsInputs.push('')
            }
            return newState
        })
    }
    render() {
        return (
            <CreateInvoicePage productsInputCounter={this.state.productsInputs} onProductChange={this.onProductChange} onCustomerChange={this.onCustomerChange} customers={this.props.customers} products={this.props.products} />
        );
    }
}

function mapStateToProps(state) {
    return { customers: state.customers, products: state.products };
}

export default connect(
    mapStateToProps,

)(CreateInvoicePageContainer);
