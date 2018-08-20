import React, { Component } from 'react';

import { Provider } from 'react-redux';
import AppContainer from './containers/appContainer';
import { store } from './services/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
