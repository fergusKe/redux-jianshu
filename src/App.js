import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route exact path="/" render={() => <div>home</div>} />
              <Route path="/detail" exact render={() => <div>detail</div>} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
