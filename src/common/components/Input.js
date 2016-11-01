
import React from 'react';
import { Text, View, TextInput } from 'react-native';

// themes
import themes from 'Bread_Crumbs/src/stylesheets/themes';
const { loginInput, boxShadow } = themes;

const styles = {
  input: {
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
  },

  lableStyle: {
    fontSize: 18,
    flex: 2,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
};

const { wrapper, lableStyle, input } = styles;

const Input = (props) => {
  const {
    lable,
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    autoFocus,
    autoCapitalize,
    returnKeyType,
    onSubmitEditing,
    keyboardType,
    returnKeyLabel,
  } = props;

  return (
    <View style={ [loginInput, boxShadow, wrapper] }>
      <Text style={ input }>{ lable }</Text>
      <TextInput
        placeholder={ placeholder }
        autoCorrect={ false }
        style={ [lableStyle] }
        value={ value }
        onChangeText={ onChangeText }
        secureTextEntry={ secureTextEntry }
        autoFocus={ autoFocus }
        autoCapitalize={ autoCapitalize }
        returnKeyType={ returnKeyType }
        onSubmitEditing={ onSubmitEditing }
        keyboardType={ keyboardType }
        returnKeyLabel={ returnKeyLabel }
      />
    </View>
  );
};

export { Input };
