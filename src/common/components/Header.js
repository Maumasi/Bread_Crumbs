
import React from 'react';
import {Text, View} from 'react-native';

const styles = {
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Futura-Medium',
    color: '#C49A6C', // light brown
    // textAlign: 'center',
  },
  headerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    height: 60,
    // backgroundColor: '#000',
    elevation: 2,
    position: 'relative',
  },
};

const Header = (props) => {
  const {title} = props;
  const {headerTitle, headerWrapper} = styles;

  return (
    <View style={headerWrapper} >
      <Text style={headerTitle}>{title}</Text>
    </View>
  );
};

export {Header};
