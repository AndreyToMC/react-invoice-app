import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { store } from '../services/store';
import MainPage from '../components/mainPage';
import CustomersPage from '../components/customersPage'
import InvoicePage from '../components/invoicePage'
import ProductsPage from '../components/productsPage'
import ViewModePage from '../components/viewModePage'
import Header from '../components/header';

const history = createHistory();

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Header />
            <Route exact path="/" component={MainPage} />
            <Route path="/customers" component={CustomersPage} />
            <Route exact path="/invoices" component={InvoicePage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/invoices/:id" component={ViewModePage} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default AppRouter;
