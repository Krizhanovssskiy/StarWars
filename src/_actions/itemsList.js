import swapi        from '../_apis/starWars';
import {
  POPULATE_PLANETS,
  CLAER_PLANET }   from '../_constants';
import _pull_out_id from "../_helpers/_pull_out_id";    //pulling id with Url

export const getFirstPageItemsList = (url) => async dispatch => {
  try {
    const {data, status} = await swapi.get(`${url}`);
    if (data && ( status === 200 || status === '200' )) {
      data.results = data.results.map(item => ({ ...item, id: _pull_out_id(item.url)}));
      dispatch({type: POPULATE_PLANETS, payload: {...data, ...data.results}});
    }
  } catch (err) {
    console.log(err);
  }
};

export const getNextPageItemsList = (urlCategori, number) => async dispatch => {
  try {
    const {data, status} = await swapi.get(`${urlCategori}?page=${number}`);
    if (data && ( status === 200 || status === '200' )) {
      data.results = data.results.map(item => ({ ...item, id: _pull_out_id(item.url)}));
      dispatch({type: POPULATE_PLANETS, payload: {...data, ...data.results}});
    }
  } catch (err) {
    console.log(err);
  }
};

export const clearItemsList = () => {
  return {
    type: CLAER_PLANET,
  }
};
