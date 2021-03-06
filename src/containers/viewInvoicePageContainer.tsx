import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ViewInvoicePage from '../components/viewInvoicePage';
import { getInvoicesItems  } from '../redux/invoiceItems/actions';
import { getInvoiceById  } from '../redux/invoices/actions';

interface IEditInvoicePageProps {
  match: {
    params: {
      id: number,
    },
  },
  productsPriceById: {},
  productsNameById: {},
  customers: [],
  products: [],
  getInvoiceById: (invoiceId: number) => void,
  getInvoicesItems: (invoiceId: number) => void,
  invoiceItems: [],
  currentInvoice: Iinvoice,
}

interface Iinvoice {
  id: number,
  customer_id: number,
  discount: number,
  total: string,
}

interface InvoiceItem {
  id?: number,
  quantity: number,
  product_id: number,
}

class EditInvoicePageContainer extends React.Component<IEditInvoicePageProps> {
  componentDidMount() {
    const invoiceId = this.props.match.params.id;
    this.props.getInvoiceById(invoiceId);
    this.props.getInvoicesItems(invoiceId);
  }
  getCustomer(customerId, customersList) {
    let customer = customersList.filter((elem) => elem.id === customerId)
    customer = customer.shift()
    if (customer) {
      return customer.name
    }
  }
  getIntemsRow(inviceItems, productsNamesList, productsPriceList) {
    if (!inviceItems || !productsNamesList || !productsPriceList) {
      return
    }
    const itemsList = inviceItems.map((elem) => {
      const item = {
        name: productsNamesList[elem.product_id],
        quantity: elem.quantity,
        price: elem.quantity * productsPriceList[elem.product_id],
      }
      return item
    })
    return itemsList
  }
  render() {
    const { customers, invoiceItems, currentInvoice, products, productsPriceById, productsNameById } = this.props
    const customer = this.getCustomer(currentInvoice.customer_id, customers)
    const itemsList = this.getIntemsRow(invoiceItems, productsNameById, productsPriceById)
    return (
      <ViewInvoicePage
        currentInvoice={currentInvoice.id}
        invoiceItems={itemsList}
        products={products}
        productsPriceById={productsPriceById}
        customer={customer}
        discount={currentInvoice.discount}
        totalPrice={currentInvoice.total}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customers.customersList,
    products: state.products.productsList,
    productsPriceById: state.products.productsPriceById,
    productsNameById: state.products.productsNameById,
    invoiceItems: state.invoiceItems,
    currentInvoice: state.invoices.currentInvoice,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getInvoiceById: bindActionCreators(getInvoiceById, dispatch),
    getInvoicesItems: bindActionCreators(getInvoicesItems, dispatch),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditInvoicePageContainer);
