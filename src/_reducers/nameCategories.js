import { SELECT_CATEGORIES, CLEAR_CATEGORIES } from "../_constants";

export default ( state = '', action ) => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_CATEGORIES:
      console.log(payload, 'payload');

      return payload;

    case CLEAR_CATEGORIES:
      return '';

    default:
      return state;
  }
}

