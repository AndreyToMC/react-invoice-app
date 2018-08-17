import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import history from '../services/history';
import MainPageContainer from './mainPageContainer';
import CustomersPageContainer from './customersPageContainer';
import InvoicePageContainer from './invoicePageContainer';
import ProductsPageContainer from './productsPageContainer';
import EditInvoicePageContainer from './editInvoicePageContainer';
import CreateInvoicePageContainer from './createInvoicePageContainer';
import HeaderContainer from './headerContainer';
import AppContainer from './appContainer';


class AppRouter extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Container>
            <HeaderContainer />
            <Route exact path="/" component={MainPageContainer} />
            <Route path="/customers" component={CustomersPageContainer} />
            <Route exact path="/invoices" component={InvoicePageContainer} />
            <Route path="/products" component={ProductsPageContainer} />
            <Route path="/invoices/:id" component={EditInvoicePageContainer} />
            <Route path="/create_invoice" component={CreateInvoicePageContainer} />
          </Container>
        </div>
      </ConnectedRouter>
    );
  }
}

export default AppRouter;
