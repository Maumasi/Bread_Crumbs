
import React from 'react';
import { Dimensions, MapView } from 'react-native';
// import MapView from 'react-native-maps';

// custom components
import { ScreenWrapper } from 'Bread_Crumbs/src/views/components/';

let { width, height } = Dimensions.get('window');

const styles = {
  mapArea: {
    height: height,
    width: width,
  },
};

navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords))
// where I'm at now
// 28.593870, -81.302437

// 37.785834, -122.406417

const MapArea = (props) => {

  const markers = [
  {
    latitude: 37.785834,
    longitude: -122.406417,
    title: 'Foo Place',
    subtitle: '1234 Foo Drive'
  }
];

  return (
    <ScreenWrapper>
      <MapView style={ styles.mapArea }
        showsUserLocation
        followUserLocation
        annotations={ markers }
      />
      
    </ScreenWrapper>
  );
};

export { MapArea };
