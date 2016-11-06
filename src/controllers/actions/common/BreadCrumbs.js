import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  BREAD_CRUMB_UPDATE,
  BREAD_CRUMB_CREATED,
  MY_BREAD_CRUMBS,
} from 'Bread_Crumbs/src/controllers/actions/types';

// track bread crumb editing within app
export const updateBreadCrumb = ({ prop, value }) => {
  return {
    type: BREAD_CRUMB_UPDATE,
    payload: { prop, value },
  };
};

// create a bread crumb
export const createBreadCrumb = ({
  title,
  message,
  discoverable,
  lat,
  lng,
  createdAt,
  userId,
}) => {

  return (dispatch) => {
    firebase.database().ref('/breadCrumbs')
      .push({
        title,
        message,
        discoverable,
        lat,
        lng,
        createdAt,
        userId,
      })
    .then(() => {
      dispatch({ type: BREAD_CRUMB_CREATED });
      Actions.mapArea({ type: 'reset' });
    });
  };
};


// get all user bread crumbs
export const myBreadCrumbs = () => {
  // const { currentUser } = firebase.auth();

  return (dispatch) => {
    navigator.geolocation.getCurrentPosition((geo) => {

      const { latitude, longitude } = geo.coords;

      // latitude and longitude ranges for markers
      const HI_LAT = (((latitude * 100) + 2) / 100);
      const LO_LAT = (((latitude * 100) - 2) / 100);

      const HI_LNG = (((longitude * 100) + 2) / 100);
      const LO_LNG = (((longitude * 100) - 2) / 100);

      // console.log(HI_LAT, HI_LNG, LO_LAT, LO_LNG);
      firebase.database().ref('/breadCrumbs')
        .orderByChild('lat')
        .startAt(LO_LAT)
        .endAt(HI_LAT)
        .on('value', (latFilter) => {

          firebase.database().ref('/breadCrumbs')
            .orderByChild('lng')
            .startAt(LO_LNG)
            .endAt(HI_LNG)
            .on('value', (lngFilter) => {
              // console.log(lngFilter.val());
              // console.log(latFilter.val());

              const latLngRange = { ...lngFilter.val(), ...latFilter.val() };
              // console.log(latLngRange);

              dispatch({ type: MY_BREAD_CRUMBS, payload: latLngRange });
            });
        });
    });
  };
};
