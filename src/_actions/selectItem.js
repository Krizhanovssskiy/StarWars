import {GET_ITEM, CLEAR_ITEM } from '../_constants';
import swapi from "../_apis/starWars";
import _pull_out_id from "../_helpers/_pull_out_id";

export const getItem = (url) => async dispatch => {
  try {
    const {data, status} = await swapi.get(`${url}`);
    if (data && ( status === 200 || status === '200' )) {
      dispatch({
        type: GET_ITEM,
        payload: { ...data, id: _pull_out_id(data.url)}
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const clearItem = () => {
  return {
    type: CLEAR_ITEM
  }
};