import {
  BREAD_CRUMB_UPDATE,
} from 'Bread_Crumbs/src/controllers/actions/types';

const INIT_STATE = {
  title: '',
  message: '',
  discoverable: false,
  location: {},
  date: null, // Date obj
  userId: '',
};

const BreadCrumbForm = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  // const { prop, value } = payload;

  let result;

  switch (type) {
    case BREAD_CRUMB_UPDATE:
      result = { ...state, [payload.prop]: payload.value };
      break;
    default:
      result = state;
  }

  return result;
};

export { BreadCrumbForm };
