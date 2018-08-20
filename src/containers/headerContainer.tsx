import * as React from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/header';

interface IHeaderContainer {
  push: (url: string) => void,
  invoicesCuont: number,
}
class HeaderContainer extends React.Component<IHeaderContainer> {
  toNewInvoice = () => {
    this.props.push('/create_invoice')
  }
  render() {
    return (
      <Header invoicesCuont={this.props.invoicesCuont} toNewInvoice={this.toNewInvoice}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    invoicesCuont: state.invoices.invoicesList.length,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    push: bindActionCreators(push, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
