import {
  MENU_OPENED,
  MENU_CLOSED,
} from 'Bread_Crumbs/src/controllers/actions/types';

const INIT_STATE = { menuState: false };

const MenuState = (state = INIT_STATE, action) => {
  let result;
  const { type, payload } = action;

  switch (type) {
    case MENU_OPENED:
      result = { ...state, menuState: payload };
      break;

    case MENU_CLOSED:
      result = { ...state, menuState: payload };
      break;

    default:
      result = state;
  }

  return result;
};

export { MenuState };
