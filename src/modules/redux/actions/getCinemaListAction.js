import { cinemaListUrl } from '../../utils/constants';

import { GET_CINEMA_LIST } from './constantsAction';

export const getCinemaListAction = () => async (dispatch) => {
  const response = await fetch(cinemaListUrl);
  const data = await response.json();
  dispatch({
    type: GET_CINEMA_LIST,
    payload: data,
  });
};
