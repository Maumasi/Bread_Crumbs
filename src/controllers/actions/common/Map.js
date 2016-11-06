
// type constants
import { MAP_MOVE } from 'Bread_Crumbs/src/controllers/actions/types';

export const mapMove = ({ props, value }) => {

  navigator.geolocation.getCurrentPosition((geo) => {

    const { latitude, longitude } = geo.coords;
    return (dispatch) => {
      let marker;
      if (value.longitude !== null && value.latitude !== null) {
        marker = { props, value };
      } else {
        marker = { props, value: { latitude, longitude, latitudeDelta: 0.03, longitudeDelta: 0.03 } };
      } // if

      dispatch({ type: MAP_MOVE, payload: marker });
    }; // return
  }); // getCurrentPosition
}; // mapMove
