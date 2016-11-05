
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from 'Bread_Crumbs/src/controllers/reducers/';

// db credentials
import firebaseCredentials from 'Bread_Crumbs/src/models/db/firebaseCredentials';

// router
import Router from 'Bread_Crumbs/src/Router';

class App extends Component {

  // init db
  componentWillMount() {
    firebase.initializeApp(firebaseCredentials);
  }

  // app view
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={ store } >
        <Router />
      </Provider>
    );
  }
}// class

export default App;
