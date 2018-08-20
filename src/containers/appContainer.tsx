import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCustomers } from '../actions/customersActions';
import { getInvoices } from '../actions/invoicesActions';
import { getProducts } from '../actions/productsActions';

import AppRouter from './appRouting';

interface IAppContainer {
  getCustomers: () => void,
  getProducts: () => void,
  getInvoices: () => void,
}

class AppContainer extends React.Component<IAppContainer> {
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
