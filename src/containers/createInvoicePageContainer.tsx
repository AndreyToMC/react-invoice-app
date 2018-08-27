import * as React from 'react';
import { connect } from 'react-redux';
import { Prompt } from 'react-router-dom';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';

import CreateInvoicePage from '../components/invoiceActionsPage/pageLayout';
import { sendInvoices } from '../redux/invoices/actions';

interface ICreateInvoicePageProps {
  invoiceId: number,
  productsPriceById: {},
  customers: [],
  products: [],
  currentInvoice: Iinvoice,
  sendInvoices: (data: Iinvoice, invoiceItemsInputs: any[]) => void,
}

interface ICreateInvoicePageState {
  isBlocking: boolean,
  errorMsg: {
    invoiceItems: string,
    customerInput: string,
    price: string,
  },
  customerInput: string,
  invoiceItemsInputs: any[],
  addInput: {
    productInput: string,
    qtyInput: number,
    priceValue: number,
  },
  totalPrice: string,
  discountInput: number,
}

interface Iinvoice {
  id?: number,
  customer_id: number,
  discount: number,
  total: string,
}

interface InvoiceItem {
  id?: number,
  quantity: number,
  product_id: number,
}

class CrateInvoicePageContainer extends React.Component<ICreateInvoicePageProps, ICreateInvoicePageState> {
  constructor(props) {
    super(props);
    this.state = {
      isBlocking: false,
      errorMsg: {
        invoiceItems: '',
        customerInput: '',
        price: '',
      },
      customerInput: '',
      invoiceItemsInputs: [],
      addInput: {
        productInput: '',
        qtyInput: 0,
        priceValue: 0,
      },
      totalPrice: '0.00',
      discountInput: 0,
    };
    this.onAddInputsChange = this.onAddInputsChange.bind(this);
    this.onItemListInputChange = this.onItemListInputChange.bind(this);
    this.getProductPrice = this.getProductPrice.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
          const newState = {...prevState};
          newState.errorMsg.customerInput = '';
          newState.customerInput = customerId;
          newState.isBlocking = true;
          return newState;
        });
        break;
      case 'productInput':
        const productId = e.target.value;
        this.setState((prevState) => {
          const newState = {...prevState};
          const qtyValue = prevState.addInput.qtyInput;
          const productPriceTotal = this.getProductPrice(productId, qtyValue);
          const productInputId = prevState.invoiceItemsInputs.length
          newState.invoiceItemsInputs.push({ id: productInputId, product_id: productId, quantity: qtyValue, productPriceTotal });
          newState.errorMsg.invoiceItems = '';
          newState.addInput.qtyInput = 0;
          newState.isBlocking = true;
          newState.totalPrice = this.getTotalPrice(newState, null);
          return newState;
        });
        break;
      case 'qtyInput':
        const quantity = e.target.value;
        if (quantity >= 0) {
          this.setState((prevState) => {
            const newState = {...prevState};
            newState.addInput.qtyInput = quantity;
            newState.totalPrice = this.getTotalPrice(newState, null);
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

  onItemListInputChange(e, inputId) {
    switch (e.target.name) {
      case 'listItemProductInput':
        const newProductId = e.target.value;
        this.setState((prevState) => {
          const newState = {...prevState};
          const quantity = newState.invoiceItemsInputs[inputId].quantity;
          const productPrice = this.getProductPrice(newProductId, quantity);
          newState.invoiceItemsInputs[inputId].product_id = newProductId;
          newState.invoiceItemsInputs[inputId].productPriceTotal = productPrice.toFixed(2);
          newState.totalPrice = this.getTotalPrice(newState, null);
          return newState;
        });
        break;
      case 'listItemQtyInput':
        const newQuantity = e.target.value;
        if (newQuantity >= 0) {
          this.setState((prevState) => {
            const newState = {...prevState};
            const productId = newState.invoiceItemsInputs[inputId].product_id;
            const productPrice = this.getProductPrice(productId, newQuantity);
            newState.invoiceItemsInputs[inputId].quantity = newQuantity;
            newState.invoiceItemsInputs[inputId].productPriceTotal = productPrice.toFixed(2);
            newState.totalPrice = this.getTotalPrice(newState, null);
            newState.errorMsg.price = '';
            return newState;
          });
        }
        break;
      default:
    }
  }

  onSubmit() {
    const {
      invoiceItemsInputs, discountInput, totalPrice, customerInput,
    } = this.state;
    if (invoiceItemsInputs.length < 1 || !customerInput || parseInt(totalPrice, 10) <= 0) {
      this.setState({
        errorMsg: {
          invoiceItems: '',
          customerInput: '',
          price: '',
        },
      });
      this.setState((prewState) => {
        const newState = {...prewState};
        if (!customerInput) {
          newState.errorMsg.customerInput = 'please select customer'
        }
        if (invoiceItemsInputs.length < 1) {
          newState.errorMsg.invoiceItems = 'please select products'
        }
        if (parseInt(totalPrice, 10) <= 0) {
          newState.errorMsg.price = 'please check quantity'
        }
        return newState;
      });
      return
    }
    this.setState({isBlocking: false})
    const customer_id = parseInt(customerInput, 10)
    this.props.sendInvoices({customer_id, discount: discountInput, total: totalPrice}, invoiceItemsInputs)

  }

  redirect = (location) => `Are you sure you want to go to ${location.pathname}`

  render() {
    const {
      isBlocking, customerInput, invoiceItemsInputs, addInput, totalPrice, discountInput, errorMsg,
    } = this.state;
    return (
      <div>
        <CreateInvoicePage
          invoiceId={this.props.invoiceId}
          onAddInputsChange={this.onAddInputsChange}
          onItemListInputChange={this.onItemListInputChange}
          customers={this.props.customers}
          customerInputValue={customerInput}
          products={this.props.products}
          productInputValue={addInput.productInput}
          qtyInputValue={addInput.qtyInput}
          invoiceItemsInputs={invoiceItemsInputs}
          discountInput={discountInput}
          totalPrice={totalPrice}
          getProductPrice={this.getProductPrice}
          errors={errorMsg}
          onSubmit={this.onSubmit}
          submitButton={true}
        />
        <Prompt when={isBlocking} message={this.redirect} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customers.customersList,
    products: state.products.productsList,
    productsPriceById: state.products.productsPriceById,
    invoiceId: state.invoices.invoicesList.slice(-1).shift() && state.invoices.invoicesList.slice(-1).shift().id + 1,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    sendInvoices: bindActionCreators(sendInvoices, dispatch),
    push: bindActionCreators(push, dispatch),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CrateInvoicePageContainer);
