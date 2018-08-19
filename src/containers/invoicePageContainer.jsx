import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InvoicePage from '../components/invoicePage';
import { push } from 'react-router-redux';

class InvoicePageContainer extends Component {
  toInvoice = (e) => {
    const invoiceId = e.target.parentNode.id
    this.props.push(`/invoices/${invoiceId}`)
  }
  render() {
    return (
      <InvoicePage toInvoice={this.toInvoice} invoices={this.props.invoices} customersNames={this.props.customersNameById}/>
    );
  }
}

function mapStateToProps(state) {
  return { invoices: state.invoices.invoicesList, customersNameById: state.customers.customersNameById };
}
function mapDispatchToProps(dispatch) {
  return {
    push:bindActionCreators(push, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InvoicePageContainer);
