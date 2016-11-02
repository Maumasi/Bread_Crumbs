
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from 'Bread_Crumbs/src/controllers/reducers/';

// db credentials
import firebaseCredentials from 'Bread_Crumbs/src/models/db/firebaseCredentials';

// partial
import { LogInScreen } from 'Bread_Crumbs/src/views/screens/common/LogInScreenRedux';


class AppRedux extends Component {

  // init db
  componentWillMount() {
    firebase.initializeApp(firebaseCredentials);
  }

  // app view
  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={ store } >
        <LogInScreen />
      </Provider>
  );
  }
}// class

export default AppRedux;
