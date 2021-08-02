import { baseUrl } from '../../../../configs/api.configs';
import {
  GET_CINEPLEX_LOGO_ERROR,
  GET_CINEPLEX_LOGO_LOADING,
  GET_CINEPLEX_LOGO_SUCCESS,
} from '../constantsAction.js';

export const getCineplexLogoAction = () => async (dispatch) => {
  const sendRequest = async () => {
    dispatch({ type: GET_CINEPLEX_LOGO_LOADING });
    const response = await fetch(`${baseUrl}/QuanLyRap/LayThongTinHeThongRap`);
    const data = await response.json();
    return data;
  };

  try {
    const data = await sendRequest();
    dispatch({ type: GET_CINEPLEX_LOGO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CINEPLEX_LOGO_ERROR });
  }
};
