
import React, { Component } from 'react';
import firebase from 'firebase';

// db credentials
import firebaseCredentials from 'Bread_Crumbs/src/firebaseCredentials';

// components
import { LoadingSpinner, Button } from 'Bread_Crumbs/src/common/';

// app screens
import { LoginScreen, AppLoadingScreen } from 'Bread_Crumbs/src/views/';


class App extends Component {
  state = { isLoggedIn: null };

  // init db
  componentWillMount() {
    firebase.initializeApp(firebaseCredentials);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  router() {
    let result;
    switch (this.state.isLoggedIn) {

      // show login screen
      case false:
        result = <LoginScreen/>;
        break;

      // show user logged in
      case true:
        result = <Button onPress={ () => firebase.auth().signOut() } buttonTitle={ 'Log Out' } />;
        break;

      // show spinner while app connects to firebase
      default:
        result = <AppLoadingScreen />;
    } // switch

    return result;
  }

  // app view
  render() {
    return this.router();
  }
}// class

export default App;
