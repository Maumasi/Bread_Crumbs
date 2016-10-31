
import React, { Component } from 'react';
import firebase from 'firebase';

import firebaseCredentials from 'Bread_Crumbs/src/firebaseCredentials.js';

import { LoginScreen } from 'Bread_Crumbs/src/views/index.js';

class App extends Component {

  // init db
  componentWillMount() {
    firebase.initializeApp(firebaseCredentials);
  }

  // app view
  render() {
    return (
      <LoginScreen/>
    );
  }
}// class

export default App;
