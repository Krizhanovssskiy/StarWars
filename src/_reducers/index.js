import { combineReducers } from "redux";

import categories from "./categories";
import listItems from "./listItemsReducer";
import item from "./item";
import nameElement from "./nameCategories";

export default combineReducers({
  categories,
  listItems,
  item,
  nameElement
})