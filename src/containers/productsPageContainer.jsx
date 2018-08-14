import React, { Component } from 'react';
import ProductsPage from '../components/productsPage'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts } from '../actions/productsActions';

class ProductsPageContainer extends Component {

  render() {
    return (
      <ProductsPage products={this.props.products}/>
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
)(ProductsPageContainer)
