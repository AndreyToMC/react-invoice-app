import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainPage from "../components/mainPage";

class MainPageContainer extends Component {
  render() {
    return (
      <MainPage invoices={this.props.invoices} customersNames={this.props.customersNameById}/>
    );
  }
}

function mapStateToProps(state) {
  return { invoices: state.invoices, customersNameById: state.customers.customersNameById };
}
function mapDispatchToProps(dispatch) {
  return { };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPageContainer);
