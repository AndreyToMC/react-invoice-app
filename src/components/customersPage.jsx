import React, { Component } from 'react';
import { getCustomers } from '../actions/customersActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table } from 'reactstrap';



class CustomersPage extends Component {
  componentDidMount() {
    this.props.getCustomers();
  }

  render() {


    console.log(this.props.customers)
    return (
      <Table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Address</th>
            <th>Customer Phone number</th>
          </tr>
        </thead>
        <tbody>
          {this.props.customers.map(elem => {
            return (
              <tr>
                <td>{elem.name}</td>
                <td>{elem.address}</td>
                <td>{elem.phone}</td>
              </tr>
            )}
          )}

          <tr>
            <td>Name</td>
            <td>Address</td>
            <td>Phone number</td>
          </tr>
        </tbody>
      </Table>
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
)(CustomersPage);
