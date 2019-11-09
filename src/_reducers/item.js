import { GET_ITEM, CLEAR_ITEM } from '../_constants';

export default (state = {}, actions) => {
  const { type, payload } = actions;

  switch (type) {

    case GET_ITEM:
      return { ...payload };

    case CLEAR_ITEM:
      return {};

    default: return state;

  }
}