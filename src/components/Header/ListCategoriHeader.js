import React from 'react';
import ItemCategoriHeader from "./ItemCategoriHeader";
import {connect} from "react-redux";
import {selectCategories} from "../../_actions";

const ListCategoriHeader = ({clazz, categories, nameElement, selectCategories}) => {
  return (
    <ul className={clazz}>
      {
        categories.map(item => (
          <ItemCategoriHeader
            key={item.id}
            nameElement={nameElement}
            item={item}
            onSelect={() => selectCategories(item.nameCategorie)}
          />
        ))
      }
    </ul>
  )
};

export default connect(
  ({categories, nameElement}) => ({
    categories,
    nameElement
  }),
  {
    selectCategories
  }
)(ListCategoriHeader);