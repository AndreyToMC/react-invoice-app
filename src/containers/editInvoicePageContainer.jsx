import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditInvoicePage from '../components/edit-invoice-page/editInvoicePage';
import { getInvoicesItems } from '../actions/invoicesItemsActions';


class CreateInvoicePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerInput: '',
      invoiceItemsInputs: [],
      addInput: {
        productInput: '',
        qtyInput: 0,
        priceValue: 0,
      },
      totalPrice: 0,
      discountInput: 0,
      invoiceId: 0,
    };
    this.onAddInputsChange = this.onAddInputsChange.bind(this);
    this.onItemListInputChange = this.onItemListInputChange.bind(this);
    this.getProductPrice = this.getProductPrice.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
  }

  componentDidMount() {
    const invoiceId = this.props.match.params.id;
    this.props.getInvoicesItems(invoiceId);
    this.setState({ invoiceId });
  }

  getTotalPrice(state, discount) {
    const itemsTotalPrice = state.invoiceItemsInputs.reduce((ac, elem) => ac + parseFloat(elem.productPriceTotal), 0);
    if (discount) {
      const itemsTotalPriceWithDiscount = itemsTotalPrice - (itemsTotalPrice * discount / 100);
      return itemsTotalPriceWithDiscount.toFixed(2);
    }
    const itemTotalPriceStateDiscount = itemsTotalPrice - (itemsTotalPrice * state.discountInput / 100);
    return itemTotalPriceStateDiscount.toFixed(2);
  }

  getProductPrice(productId, qty) {
    const productPrice = this.props.productsPriceById[productId];
    return qty * productPrice;
  }

  onAddInputsChange(e) {
    switch (e.target.name) {
      case 'customerInput':
        const customerId = e.target.value;
        this.setState((prevState) => {
          const newState = Object.assign({}, prevState);
          newState.customerInput = customerId;
          newState.isBlocking = true;
          return newState;
        });
        break;
      case 'productInput':
        const productId = e.target.value;
        this.setState((prevState) => {
          const newState = Object.assign({}, prevState);
          const qtyValue = prevState.addInput.qtyInput;
          const productPriceTotal = this.getProductPrice(productId, qtyValue);
          newState.invoiceItemsInputs.push({ productId, qtyValue, productPriceTotal });
          newState.addInput.qtyInput = 0;
          newState.isBlocking = true;
          newState.totalPrice = this.getTotalPrice(newState);
          return newState;
        });
        break;
      case 'qtyInput':
        const quantity = e.target.value;
        if (quantity >= 0) {
          this.setState((prevState) => {
            const newState = Object.assign({}, prevState);
            newState.addInput.qtyInput = quantity;
            newState.totalPrice = this.getTotalPrice(newState);
            return newState;
          });
        }
        break;
      case 'discountInput':
        if (e.target.value >= 0 && e.target.value <= 50) {
          const discountInput = e.target.value;
          const totalPrice = (this.getTotalPrice(this.state, discountInput));
          this.setState({ discountInput, totalPrice });
        }
        break;
      default:
    }
  }

  onItemListInputChange(e) {
    const inputId = e.target.id;
    switch (e.target.name) {
      case 'listItemProductInput':
        const productId = e.target.value;
        this.setState((prevState) => {
          const newState = Object.assign({}, prevState);
          const quantity = newState.invoiceItemsInputs[inputId].qtyValue;
          const productPrice = this.getProductPrice(productId, quantity);
          newState.invoiceItemsInputs[inputId].productId = productId;
          newState.invoiceItemsInputs[inputId].productPriceTotal = productPrice.toFixed(2);
          newState.totalPrice = this.getTotalPrice(newState);
          return newState;
        });
        break;
      case 'listItemQtyInput':
        const quantity = e.target.value;
        if (quantity >= 0) {
          this.setState((prevState) => {
            const newState = Object.assign({}, prevState);
            const productId = newState.invoiceItemsInputs[inputId].productId;
            const productPrice = this.getProductPrice(productId, quantity);
            newState.invoiceItemsInputs[inputId].qtyValue = quantity;
            newState.invoiceItemsInputs[inputId].productPriceTotal = productPrice.toFixed(2);
            newState.totalPrice = this.getTotalPrice(newState);
            return newState;
          });
        }
        break;
      default:
    }
  }

  render() {
    const {
      customerInput, invoiceItemsInputs, addInput, totalPrice, discountInput, invoiceId,
    } = this.state;
    const {
      invoiceItems, customers, products,
    } = this.props;
    return (
      <EditInvoicePage
        invoicesId={invoiceId}
        onSubmit={this.onSubmit}
        onAddInputsChange={this.onAddInputsChange}
        onItemListInputChange={this.onItemListInputChange}
        customers={customers}
        customerInputValue={customerInput}
        products={products}
        productInputValue={addInput.productInput}
        qtyInputValue={addInput.qtyInput}
        invoiceItemsInputs={invoiceItems}
        discountInput={discountInput}
        totalPrice={totalPrice}
        getProductPrice={this.getProductPrice}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customers.customersList,
    products: state.products.productsList,
    productsPriceById: state.products.productsPriceById,
    invoiceItems: state.invoiceItems,
    invoices: state.invoices,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getInvoicesItems: bindActionCreators(getInvoicesItems, dispatch),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateInvoicePageContainer);