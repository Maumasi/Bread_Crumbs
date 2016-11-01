
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

// themes
import themes from 'Bread_Crumbs/src/stylesheets/themes';
const { boxShadow, loginButton, loginText } = themes;

const Button = (props) => {
  const { onPress, buttonTitle } = props;

  return (
    <TouchableOpacity
      style={ [boxShadow, loginButton] }
      onPress={ onPress }
    >
      <Text style={ [loginText] }>{ buttonTitle }</Text>
    </TouchableOpacity>
  );
};

export { Button };
