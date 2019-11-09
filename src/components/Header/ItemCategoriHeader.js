import React from 'react';
import {Link} from "react-router-dom";

const ItemCategoriHeader = ({item, nameElement, onSelect}) => {
  return (
    <li>
      <Link
        className={
          `Header__nav-btn 
          ${item.nameCategorie === nameElement 
            ? ' Header__nav-Active' 
            : '' }`
        }
        onClick={onSelect}
        to={`/${item.nameCategorie}/`}
      >
        {item.nameCategorie}
      </Link>
    </li>
  )
};

export default ItemCategoriHeader;