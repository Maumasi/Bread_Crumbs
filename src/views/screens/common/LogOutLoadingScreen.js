// log out loading screen

import React, { Component } from 'react';
import { Image, StatusBar } from 'react-native';
import { Header, ScreenWrapper, LoadingSpinner } from 'Bread_Crumbs/src/views/components/';

// themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
const { bgGreen, textDarkBrown, loginIcon, logoIcon } = themes;
StatusBar.setBarStyle('light-content');

class LogOutLoadingScreen extends Component {

  render() {
    return (
      <ScreenWrapper theme={ bgGreen }>
        <Header textTheme={ textDarkBrown } title={ 'Logging out of Bread Crumbs' }/>

        <Image style={ loginIcon } source={ logoIcon } />

        <LoadingSpinner />


      </ScreenWrapper>
    );
  }
}

export { LogOutLoadingScreen };
