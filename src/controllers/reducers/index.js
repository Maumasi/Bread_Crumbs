import { combineReducers } from 'redux';

// reducers
import { Auth } from 'Bread_Crumbs/src/controllers/reducers/common/Auth';
import { MenuState } from 'Bread_Crumbs/src/controllers/reducers/common/MenuState';
// combine all reducers
export default combineReducers({
  auth: Auth,
  menu: MenuState,
});
