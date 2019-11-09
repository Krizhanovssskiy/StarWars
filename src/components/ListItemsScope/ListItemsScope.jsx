import './style.scss';

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import {getFirstPageItemsList, clearItemsList} from '../../_actions';

import Navigation from '../Navigation';
import Loading from "../Loading";
import ItemScope from "./ItemScope";

const ListItemsScope = ({
                          listItems,
                          getFirstPageItemsList,
                          history,
                          match,
                          clearItemsList }) => {
  useEffect(() => {
      getFirstPageItemsList(match.url);
      return () => {
        clearItemsList();
      }
    },
    [getFirstPageItemsList, match.url]
  );
  const {count, results} = listItems;

  if (!results) return <Loading/>;

  const onSelectedItem = (item) => {
    history.push(item.id);
  };
  return (
    <div className="container">
      <Navigation/>
      <ul className='ListItemsScope'>
        {
          results.map((item) =>
            <ItemScope
              key={item.id}
              item={item}
              categori={match.url}
              onSelectedItem={() => onSelectedItem(item)}
            />
          )
        }
      </ul>
    </div>
  )
};

export default connect(
  ({listItems}) => ({
    listItems
  }),
  {
    getFirstPageItemsList,
    clearItemsList,
  }
)(
  withRouter(ListItemsScope)
);