import { combineReducers } from 'redux';

// reducers
import { Auth } from 'Bread_Crumbs/src/controllers/reducers/common/Auth';
import { MenuState } from 'Bread_Crumbs/src/controllers/reducers/common/MenuState';
import { BreadCrumbForm } from 'Bread_Crumbs/src/controllers/reducers/common/BreadCrumbForm';
// combine all reducers
export default combineReducers({
  auth: Auth,
  menu: MenuState,
  breadCrumbs: BreadCrumbForm,
});
