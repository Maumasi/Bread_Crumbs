
import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const styles = {
  loadingSpiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const LoadingSpinner = (props) => {
  const { size, color } = props;

  return (
    <View style={ styles.loadingSpiner }>
      <ActivityIndicator
        size={ size || 'large' }
        color={ color }
      />
    </View>
  );
};

export { LoadingSpinner };
