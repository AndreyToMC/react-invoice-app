import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditInvoicePage from '../components/edit-invoice-page/editInvoicePage';
import { getInvoicesItems, changeInvoicesItem, addInvoicesItems } from '../actions/invoicesItemsActions';
import { getInvoiceById, changeInvoice } from '../actions/invoicesActions';



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
    // this.setNewTotal = this.getTotalPrice.bind(this);
  }

  componentDidMount() {
    const invoiceId = this.props.match.params.id;
    this.props.getInvoiceById(invoiceId);
    this.props.getInvoicesItems(invoiceId);
    this.setState({ invoiceId });
  }

  setNewTotal = (invoiceId, item, data, newItem) => {
    let newInvoiceItemsList = []
    if(item){
      this.props.invoiceItems.forEach( (elem) => {
        if(elem.id === item.id) {
          let newElem = Object.assign({}, item)
          newElem.product_id = data.productId;
          newElem.quantity = data.quantity
          newInvoiceItemsList.push(newElem)
        } else newInvoiceItemsList.push(elem)
      })
    }

    if(newItem){
      newInvoiceItemsList = newInvoiceItemsList.concat(this.props.invoiceItems)
      newInvoiceItemsList.push(newItem)
      console.log(newInvoiceItemsList)
    }
    const totalPrice = this.getTotalPrice(newInvoiceItemsList, this.props.currentInvoice.discount)
    let newInvoice = Object.assign( {}, this.props.currentInvoice)
    newInvoice.total = totalPrice
    this.props.changeInvoice(invoiceId, newInvoice)
  }

  getTotalPrice(products, discount) {
    const itemsTotalPrice = products.reduce((ac, elem) => ac + parseFloat(this.getProductPrice(elem.product_id, elem.quantity)), 0);
    const itemsTotalPriceWithDiscount = itemsTotalPrice - (itemsTotalPrice * discount / 100);
    return itemsTotalPriceWithDiscount.toFixed(2);
  }

  getProductPrice(productId, qty) {
    const productPrice = this.props.productsPriceById[productId];
    return qty * productPrice;
  }

  onAddInputsChange(e) {
  const invoiceId = this.state.invoiceId;
    switch (e.target.name) {
      case 'customerInput':
        const customerId = e.target.value;
            let newInvoice = Object.assign( {}, this.props.currentInvoice)
            newInvoice.customer_id = customerId
        this.props.changeInvoice(invoiceId, newInvoice)
        break;
      case 'productInput':
        const product_id = e.target.value;
        const quantityInp = this.state.addInput.qtyInput;
        this.props.addInvoicesItems(invoiceId, {product_id, quantity: quantityInp})
        this.setNewTotal(invoiceId, null, null, {product_id, quantity: quantityInp})
        this.setState((prevState) => {
          const newState = Object.assign({}, prevState);
          newState.addInput.qtyInput = 0;
          return newState;
        });
        break;
      case 'qtyInput':
        const quantity = e.target.value;
        if (quantity >= 0) {
          this.setState((prevState) => {
            const newState = Object.assign({}, prevState);
            newState.addInput.qtyInput = quantity;
            return newState;
          });
        }
        break;
      default:
    }
  }

  onItemListInputChange(e) {
    const inputId = parseInt(e.target.id);
    const invoiceId = this.state.invoiceId;

    const item = this.props.invoiceItems.filter(elem => elem.id===inputId).shift()
    switch (e.target.name) {
      case 'listItemProductInput':
        const product_id = parseInt(e.target.value);
        const itemQty = item.quantity
        this.props.changeInvoicesItem(invoiceId, {product_id, quantity: itemQty}, inputId)
        this.setNewTotal(invoiceId, item, {productId: product_id, quantity: itemQty})
        break;
      case 'listItemQtyInput':
        const quantity = e.target.value;
        const productId = item.product_id
        this.props.changeInvoicesItem(invoiceId, {product_id: productId, quantity}, inputId)
        this.setNewTotal(invoiceId, item, {productId, quantity})
        break;
      default:
    }
  }

  render() {
    const {
      customerInput, invoiceItemsInputs, addInput, totalPrice, discountInput, invoiceId,
    } = this.state;
    const {
      invoiceItems, customers, products, currentInvoice
    } = this.props;
    return (
      <EditInvoicePage
        invoicesId={currentInvoice.id}
        onSubmit={this.onSubmit}
        onAddInputsChange={this.onAddInputsChange}
        onItemListInputChange={this.onItemListInputChange}
        customers={customers}
        customerInputValue={currentInvoice.customer_id}
        products={products}
        productInputValue={addInput.productInput}
        qtyInputValue={addInput.qtyInput}
        invoiceItemsInputs={invoiceItems}
        discountInput={currentInvoice.discount}
        totalPrice={currentInvoice.total}
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
    currentInvoice: state.invoices.currentInvoice,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getInvoiceById: bindActionCreators(getInvoiceById, dispatch),
    getInvoicesItems: bindActionCreators(getInvoicesItems, dispatch),
    changeInvoicesItem: bindActionCreators(changeInvoicesItem, dispatch),
    addInvoicesItems: bindActionCreators(addInvoicesItems, dispatch),
    changeInvoice: bindActionCreators(changeInvoice, dispatch),

  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateInvoicePageContainer);
