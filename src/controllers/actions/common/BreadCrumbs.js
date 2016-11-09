import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  BREAD_CRUMB_UPDATE,
  BREAD_CRUMB_CREATED,
  BREAD_CRUMB_UPDATED,
  MY_BREAD_CRUMBS,
  BREAD_CRUMBS_IN_AREA,
  MY_FAV_CRUMBS,
  FAV_CREATED,
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

// making updated changes to bread crumbs
export const breadCrumbUpdateDB = (edit) => {
  const {
    title,
    message,
    discoverable,
    lat,
    lng,
    createdAt,
    userId,
  } = edit.update;
  return (dispatch) => {
    firebase.database().ref(`/breadCrumbs/${ edit.update.breadCrumb.uid }`)
      .set({
        title,
        message,
        discoverable,
        lat,
        lng,
        createdAt,
        userId,
      })
      .then(() => {
        dispatch({ type: BREAD_CRUMB_UPDATED });
        Actions.myBreadCrumbs({ type: 'reset' });
      });
  };
};


// get all user bread crumbs
export const breadCrumbsNearUser = () => {
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
              const latLngRange = { ...lngFilter.val(), ...latFilter.val() };
              dispatch({ type: BREAD_CRUMBS_IN_AREA, payload: latLngRange });
            });
        });
    });
  };
};

// collect user's bread crumbs
export const myBreadCrumbs = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref('/breadCrumbs')
      .orderByChild('userId')
      .startAt(currentUser.uid)
      .endAt(currentUser.uid)
      .on('value', (myCrumbs) => {
        dispatch({ type: MY_BREAD_CRUMBS, payload: myCrumbs.val() });
      });
  };
};

// delete a user bread crumb
export const deleteBreadCrumb = ({ uid }) => {
  // const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/breadCrumbs/${ uid }`)
      .remove()
      .then(() => {
        Actions.myBreadCrumbs({ type: 'reset' });
      });
  };
};

// bread crumb favs

// create a fav
export const createAFav = ({
  title,
  message,
  discoverable,
  lat,
  lng,
  createdAt,
  userId,
}) => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/favs`)
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
      console.log('saved a fav');
      // dispatch({ type: FAV_CREATED });
      // Actions.mapArea({ type: 'reset' });
    })
    .catch(() => {
      console.log('failed to save');
    });
  };
};


// select favorited bread crumbs
export const myFavCrumbs = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/favs`)
      .on('value', (myFavs) => {
        dispatch({ type: MY_FAV_CRUMBS, payload: myFavs.val() });
      });
  };
};

export const removeFav = (uid) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/favs/${uid}`)
      .remove()
      .then(() => {
        Actions.favCrumbs({ type: 'reset' });
      });
  };
};
