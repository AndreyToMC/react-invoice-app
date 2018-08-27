import * as React from 'react';
import { connect } from 'react-redux';

import ProductsPage from '../components/productsPage';

interface IProductsPageContainer {
  products: [],

}
class ProductsPageContainer extends React.Component<IProductsPageContainer> {
  render() {
    return (
      <ProductsPage products={this.props.products} />
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products.productsList };
}
export default connect(
  mapStateToProps,
)(ProductsPageContainer);
