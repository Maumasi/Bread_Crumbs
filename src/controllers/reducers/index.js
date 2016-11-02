import { combineReducers } from 'redux';

// reducers
import { Auth } from 'Bread_Crumbs/src/controllers/reducers/common/Auth';

// combine all reducers
export default combineReducers({
  auth: Auth,
});
