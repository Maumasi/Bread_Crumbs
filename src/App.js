
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from 'Bread_Crumbs/src/controllers/reducers/';

// db credentials
import firebaseCredentials from 'Bread_Crumbs/src/models/db/firebaseCredentials';

// components
import { LoadingSpinner, Button } from 'Bread_Crumbs/src/views/components/';

// app screens
import { LogInScreen, AppLoadingScreen, LogOutLoadingScreen } from 'Bread_Crumbs/src/views/screens/';


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
        result = <LogInScreen/>;
        break;

      // show user logged in
      case true:
        result = <Button onPress={ () => {
          firebase.auth().signOut();
          this.setState({ isLoggedIn: 'logOutPressed' });
        } } buttonTitle={ 'Log Out' } />;
        break;

      case 'logOutPressed':
        result = <LogOutLoadingScreen />;
        break;

      // show spinner while app connects to firebase
      default:
        result = <AppLoadingScreen />;
    } // switch

    return result;
  }

  // app view
  render() {
    return (
      <Provider store={ createStore(reducers) } >
        { this.router() }
      </Provider>
  );
  }
}// class

export default App;
