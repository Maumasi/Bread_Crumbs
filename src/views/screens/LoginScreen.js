
// login screen

import React from 'react';
import { Image } from 'react-native';
import { Header, ScreenWrapper, SectionItem } from 'Bread_Crumbs/src/common/';

// themes
import themes from 'Bread_Crumbs/src/stylesheets/themes';
const { bgGreen, textDarkBrown } = themes;

// logo
const logo = require('Bread_Crumbs/src/resources/bread_crumbs_logo.png');

const LoginScreen = () => {
  return (
    <ScreenWrapper theme={ bgGreen }>
      <Header textTheme={ textDarkBrown } title={ 'Bread Crumbs' }/>
      <Image
        style={{ width: 30, flex: 1, height: 40 }}
        source={ logo }
      />
    </ScreenWrapper>
  );
};

export { LoginScreen };
