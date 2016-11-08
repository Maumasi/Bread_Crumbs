
import React from 'react';
import { Dimensions, MapView, StatusBar } from 'react-native';

// custom components
import { ScreenWrapper } from 'Bread_Crumbs/src/views/components/';

const { width, height } = Dimensions.get('window');

const styles = {
  mapArea: {
    height,
    width,
  },
};

const MapArea = (props) => {

  const { followUser, goToMarker, markerCollection, onMarker } = props;
// onFocus: function
// onBlur: function
  return (
    <ScreenWrapper>
      <MapView
        style={ styles.mapArea }
        followUserLocation={ followUser }
        showsUserLocation={ followUser }
        annotations={ markerCollection }
        region={ goToMarker }
        onAnnotationPress={ onMarker }
      />
    </ScreenWrapper>
  );
};

export { MapArea };
