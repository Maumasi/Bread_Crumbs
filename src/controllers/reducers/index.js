import { combineReducers } from 'redux';

// reducers
import { Auth } from 'Bread_Crumbs/src/controllers/reducers/common/Auth';
import { MenuState } from 'Bread_Crumbs/src/controllers/reducers/common/MenuState';
import { BreadCrumbForm } from 'Bread_Crumbs/src/controllers/reducers/common/BreadCrumbForm';
import { Map } from 'Bread_Crumbs/src/controllers/reducers/common/Map';
import { BreadCrumbReducer } from 'Bread_Crumbs/src/controllers/reducers/common/BreadCrumbReducer';

// combine all reducers
export default combineReducers({
  auth: Auth,
  menu: MenuState,
  breadCrumbs: BreadCrumbForm,
  mapChange: Map,
  myCrumbs: BreadCrumbReducer,
});
