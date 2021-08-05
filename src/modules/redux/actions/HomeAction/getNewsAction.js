import { UrlMockAPI } from '../../../../configs/api.configs.js';
import {
  GET_NEWS_ERROR,
  GET_NEWS_LOADING,
  GET_NEWS_SUCCESS,
} from '../constantsAction.js';

export const getNewsAction = () => async (dispatch) => {
  const sendRequest = async () => {
    dispatch({ type: GET_NEWS_LOADING });
    const response = await fetch(`${UrlMockAPI}`);
    const data = await response.json();
    return data;
  };
  try {
    const data = await sendRequest();
    dispatch({ type: GET_NEWS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_NEWS_ERROR });
  }
};
