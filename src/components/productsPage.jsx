import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Table } from 'reactstrap';
import { getProducts } from '../actions/productsActions';

class ProductsPage extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((elem) =>{
            return (
              <tr>
                <td>{elem.name}</td>
                <td>{elem.price}</td>
              </tr>
            )}
          )}
          <tr>
            <td>prduct</td>
            <td>35$</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}
function mapDispatchToProps(dispatch) {
  return { getProducts: bindActionCreators(getProducts, dispatch) };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsPage)
