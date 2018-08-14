import React, { Component } from 'react';
import Header from '../components/header'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
class HeaderContainer extends Component {
  toNewInvoice = () => {
    this.props.push('/invoices/2')
  }
  render() {
    return (
      <Header toNewInvoice={this.toNewInvoice}/>
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
    ...state,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
