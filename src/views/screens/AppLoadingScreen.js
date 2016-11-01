
// login screen

import React, { Component } from 'react';
import { Image, StatusBar } from 'react-native';
import { Header, ScreenWrapper, LoadingSpinner } from 'Bread_Crumbs/src/common/';

// themes
import themes from 'Bread_Crumbs/src/stylesheets/themes';
const { bgGreen, textDarkBrown, loginIcon, logoIcon, loadingMessage } = themes;
StatusBar.setBarStyle('light-content');

class AppLoadingScreen extends Component {

  render() {
    return (
      <ScreenWrapper theme={ bgGreen }>
        <Header textTheme={ loadingMessage } title={ 'Opening Bread Crumbs' }/>

        <Image style={ loginIcon } source={ logoIcon } />

        <LoadingSpinner color={ '#FFF' } />

      </ScreenWrapper>
    );
  } // render
} // class

export { AppLoadingScreen };
