import React, { Component } from 'react';
import Header from '../components/header';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
class HeaderContainer extends Component {
  toNewInvoice = () => {
    this.props.push('/create_invoice')
  }
  render() {
    return (
      <Header invoicesCuont={this.props.invoicesCuont} toNewInvoice={this.toNewInvoice}/>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    push: bindActionCreators(push, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    invoicesCuont: state.invoices.length
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
