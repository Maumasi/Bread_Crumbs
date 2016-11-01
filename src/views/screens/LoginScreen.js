
// login screen

import React, { Component } from 'react';
import { Image, StatusBar } from 'react-native';
import { Header, ScreenWrapper, LoginForm } from 'Bread_Crumbs/src/common/';

// themes
import themes from 'Bread_Crumbs/src/stylesheets/themes';
const { bgGreen, textDarkBrown, loginIcon, logoIcon } = themes;
StatusBar.setBarStyle('light-content');

class LoginScreen extends Component {

  render() {
    return (
      <ScreenWrapper theme={ bgGreen }>
        <Header textTheme={ textDarkBrown } title={ 'Bread Crumbs' }/>

        <Image style={ loginIcon } source={ logoIcon } />

        <LoginForm />


      </ScreenWrapper>
    );
  }
}

export { LoginScreen };
