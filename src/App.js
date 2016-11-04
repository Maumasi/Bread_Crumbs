
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

// reducers
import reducers from 'Bread_Crumbs/src/controllers/reducers/';

// db credentials
import firebaseCredentials from 'Bread_Crumbs/src/models/db/firebaseCredentials';

// router
import Router from 'Bread_Crumbs/src/Router';

// test map views
import { MapArea } from 'Bread_Crumbs/src/views/components/common/MapArea';


class App extends Component {

  // init db
  componentWillMount() {
    firebase.initializeApp(firebaseCredentials);
  }

  // app view
  render() {

    // return (
    //   <Provider store={ store } >
    //     <Router />
    //   </Provider>
    // );

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={ store } >
        <MapArea />
      </Provider>
  );
  }
}// class

export default App;
