
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
const { boxShadow, loginButton, loginText } = themes;

const Button = (props) => {
  const { onPress, buttonTitle, theme, textTheme } = props;

  return (
    <View style={ theme }>
    <TouchableOpacity
      style={ [boxShadow, loginButton] }
      onPress={ onPress }
    >
      <Text style={ [loginText, textTheme] }>{ buttonTitle }</Text>
    </TouchableOpacity>
    </View>
  );
};

export { Button };
