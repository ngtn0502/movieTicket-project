import { HIDE_FOOTER, SHOW_FOOTER } from '../actions/constantsAction';

const init = {
  isShowFooter: true,
};
// Handle UI change in page
export const routeReducer = (state = init, action) => {
  if (action.type === SHOW_FOOTER) {
    return {
      ...state,
      isShowFooter: true,
    };
  }
  if (action.type === HIDE_FOOTER) {
    return {
      ...state,
      isShowFooter: false,
    };
  }

  return { ...state };
};
