// type constants
import { MY_BREAD_CRUMBS } from 'Bread_Crumbs/src/controllers/actions/types';

const INIT_STATE = {};

const BreadCrumbReducer = (state = INIT_STATE, action) => {
  let result;

  switch (action.type) {
    case MY_BREAD_CRUMBS:
      // result = { ...state, email: action.payload };
      // console.log(action);
      result = action.payload;
      break;
    default:
      result = state;
  }

  return result;
};


export { BreadCrumbReducer };
