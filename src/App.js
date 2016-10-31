
import React, {Component} from 'react';
import firebase from 'firebase';
import {
  View,
  Text,
} from 'react-native';

import firebaseCredentials from 'Bread_Crumbs/src/firebaseCredentials.js';
import {Header} from 'Bread_Crumbs/src/common/';

class App extends Component {

  // init db
  componentWillMount() {
    firebase.initializeApp(firebaseCredentials);
  }

  // app view
  render() {
    return <Header title={'Bread Crumbs'}/>;
  }
}// class

export default App;
