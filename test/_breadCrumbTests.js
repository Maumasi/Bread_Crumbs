import { connect } from 'react-redux';
const expect = require('chai').expect;

import {
  // input
  updateBreadCrumb,

  // near by
  breadCrumbsNearUser,

  // user CRUD
  createBreadCrumb,
  breadCrumbUpdateDB,
  myBreadCrumbs,
  deleteBreadCrumb,

  // favs CRUD
  createAFav,
  myFavCrumbs,
  removeFav,
} from 'Bread_Crumbs/src/controllers/actions/';


class testBreadCrumbCrud {
  createCrumb(value) {
    return this.props.createBreadCrumb(value);
  }

  updateCrumb() {
    return this.props.myBreadCrumbs();
  }

  readCrumb() {
    return this.props.breadCrumbsNearUser();
  }

  deleteCrumb() {
    return this.props.breadCrumbsNearUser();
  }
}
testBreadCrumbCrud = connect(null,
  {
    updateBreadCrumb,
    breadCrumbsNearUser,
    createBreadCrumb,
    breadCrumbUpdateDB,
    myBreadCrumbs,
    deleteBreadCrumb,
    createAFav,
    myFavCrumbs,
    removeFav,
  })(testBreadCrumbCrud);
