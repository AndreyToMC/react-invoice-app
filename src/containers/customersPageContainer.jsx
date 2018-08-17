import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomersPage from '../components/customersPage';
import { getCustomers } from '../actions/customersActions';

class CustomersPageContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <CustomersPage customers={this.props.customers} />
    );
  }
}

function mapStateToProps(state) {
  return { customers: state.customers.customersList };
}
function mapDispatchToProps(dispatch) {
  return { getCustomers: bindActionCreators(getCustomers, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomersPageContainer);
