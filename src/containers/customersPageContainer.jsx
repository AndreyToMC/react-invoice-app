import React, { Component } from 'react';
import CustomersPage from '../components/customersPage'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCustomers } from '../actions/customersActions';

class CustomersPageContainer extends Component {

  render() {
    return (
      <CustomersPage customers = {this.props.customers}/>
    );
  }

}

function mapStateToProps(state) {
  return { customers: state.customers };
}
function mapDispatchToProps(dispatch) {
  return { getCustomers: bindActionCreators(getCustomers, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomersPageContainer);
