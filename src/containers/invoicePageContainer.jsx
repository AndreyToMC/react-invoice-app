import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InvoicePage from '../components/invoicePage';
import { getProducts } from '../actions/productsActions';

class InvoicePageContainer extends Component {
  render() {
    console.log(this.props.invoices)
    return (
      <InvoicePage invoices={this.props.invoices} customersNames={this.props.customersNameById}/>
    );
  }
}

function mapStateToProps(state) {
  return { invoices: state.invoices, customersNameById: state.customers.customersNameById };
}
function mapDispatchToProps(dispatch) {
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InvoicePageContainer);
