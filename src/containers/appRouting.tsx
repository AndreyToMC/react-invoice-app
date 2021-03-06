import * as React from 'react';

import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Container } from 'reactstrap';

import CreateInvoicePageContainer from './createInvoicePageContainer';
import CustomersPageContainer from './customersPageContainer';
import EditInvoicePageContainer from './editInvoicePageContainer';
import HeaderContainer from './headerContainer';
import InvoicePageContainer from './invoicePageContainer';
import MainPageContainer from './mainPageContainer';
import ProductsPageContainer from './productsPageContainer';
import ViewInvoicePageContainer from './viewInvoicePageContainer';

import history from '../services/history';

import ErrorSnackbar from '../components/errorSnackbar';

class AppRouter extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Container>
            <HeaderContainer />
            <Route exact={true} path='/' component={MainPageContainer} />
            <Route path='/customers' component={CustomersPageContainer} />
            <Route exact={true} path='/invoices' component={InvoicePageContainer} />
            <Route path='/products' component={ProductsPageContainer} />
            <Route path='/invoices/:id' component={ViewInvoicePageContainer} />
            <Route path='/invoices_edit/:id' component={EditInvoicePageContainer} />
            <Route path='/create_invoice' component={CreateInvoicePageContainer} />
            <ErrorSnackbar />
          </Container>
        </div>
      </ConnectedRouter>
    );
  }
}

export default AppRouter;
