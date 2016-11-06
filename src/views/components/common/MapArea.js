
import React from 'react';
import { Dimensions, MapView, StatusBar } from 'react-native';

// custom components
import { ScreenWrapper } from 'Bread_Crumbs/src/views/components/';

// StatusBar.setBarStyle('dark-content');

const { width, height } = Dimensions.get('window');

const styles = {
  mapArea: {
    height,
    width,
  },
};

// navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords))
// where I'm at now
// 28.593870, -81.302437

// 37.785834, -122.406417

const MapArea = (props) => {

  const { followUser, goToMarker } = props;

  const markers = [
    {
      latitude: 28.574970,
      longitude: -81.305334,
      title: 'Foo Place',
      subtitle: '1234 Foo Drive',
    },
  ];

// [mapView setCenterCoordinate:location animated:YES];
  return (
    <ScreenWrapper>
      <MapView
        style={ styles.mapArea }
        followUserLocation={ followUser }
        showsUserLocation={ followUser }
        annotations={ markers }
        region={ goToMarker }
      />
    </ScreenWrapper>
  );
};

export { MapArea };
