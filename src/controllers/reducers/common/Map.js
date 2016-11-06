import { MAP_MOVE } from 'Bread_Crumbs/src/controllers/actions/types';

const INIT_STATE = {
  marker: {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  },
  focusOnUser: true,
};

const Map = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  let result;

  switch (type) {
    case MAP_MOVE:
      result = { ...state, focusOnUser: false, [payload.prop]: payload.value };
      break;

    default:
      result = state;
  }
  return result;
};

export { Map };
