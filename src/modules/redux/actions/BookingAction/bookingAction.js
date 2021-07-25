import { CHOOSING_SEAT } from '../constantsAction.js';

export const choosingSeatAction = (data) => ({
  type: CHOOSING_SEAT,
  payload: data,
});
