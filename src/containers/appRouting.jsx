import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import history from '../services/history';
import MainPage from '../components/mainPage';
import CustomersPageContainer from './customersPageContainer';
import InvoicePage from '../components/invoicePage';
import ProductsPageContainer from './productsPageContainer';
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
            <Route exact path="/" component={MainPage} />
            <Route path="/customers" component={CustomersPageContainer} />
            <Route exact path="/invoices" component={InvoicePage} />
            <Route path="/products" component={ProductsPageContainer} />
            <Route path="/invoices/:id" component={CreateInvoicePageContainer} />
          </Container>
        </div>
      </ConnectedRouter>
    );
  }
}

export default AppRouter;
