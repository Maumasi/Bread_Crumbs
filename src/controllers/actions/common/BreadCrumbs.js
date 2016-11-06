import {
  BREAD_CRUMB_UPDATE,
} from 'Bread_Crumbs/src/controllers/actions/types';

export const updateBreadCrumb = ({ prop, value }) => {
  return {
    type: BREAD_CRUMB_UPDATE,
    payload: { prop, value },
  };
};
