
import React from 'react';
import { View } from 'react-native';

const styles = {
  // flex: 1,
};

const SectionItem = (props) => {
  const { children } = props;
  return (
    <View>
      { children }
    </View>
  );
};

export { SectionItem };
