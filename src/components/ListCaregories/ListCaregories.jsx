import './style.scss';

import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import {Link} from "react-router-dom";
import {selectCategories, clearCategories} from "../../_actions";

const ListCaregories = ({categories, selectCategories, clearCategories }) => {
  useEffect(() => {
    clearCategories()
  }, [clearCategories]);
  return (
    <div className="container">
      <ul className="ListCaregories">
        {
          categories.map(item => {
            const {id, img, nameCategorie} = item;
            return (
              <li
                key={id}
              >
                <Link
                  onClick={() => {selectCategories(nameCategorie)}}
                  to={`/${nameCategorie}/`}
                >
                  <span>{nameCategorie}</span>
                  <img src={img} alt={nameCategorie}/>

                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};

const mapStateToProps = ({categories}) => ({
  categories
});

export default connect(
  mapStateToProps,
  {
    selectCategories,
    clearCategories
  }
)(ListCaregories);