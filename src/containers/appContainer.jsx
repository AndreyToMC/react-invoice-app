
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppRouter from './appRouting';
import { getCustomers } from '../actions/customersActions';
import { getProducts } from '../actions/productsActions';
import { getInvoices } from '../actions/invoicesActions';



class AppContainer extends Component {
  componentDidMount() {
    this.props.getCustomers();
    this.props.getProducts();
    this.props.getInvoices();
  }

  render() {
    return (
      <AppRouter />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCustomers: bindActionCreators(getCustomers, dispatch),
    getProducts: bindActionCreators(getProducts, dispatch),
    getInvoices: bindActionCreators(getInvoices, dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(AppContainer);
