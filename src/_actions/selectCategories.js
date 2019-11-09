import { SELECT_CATEGORIES, CLEAR_CATEGORIES } from '../_constants'

export const selectCategories = (categories) => {
  return {
    type: SELECT_CATEGORIES,
    payload: categories
  }
};

export const clearCategories = () => ({
  type: CLEAR_CATEGORIES
});