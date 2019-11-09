import './style.scss';

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getNextPageItemsList } from "../../_actions";
import ButtonsBox from "./ButtonsBox";



const Navigation = ({count, getNextPageItemsList, match}) => {
  const [ numberPage, setNumberPage ] = useState(1);
  useEffect(() => {
    setNumberPage(1)
  }, [match.url]);


  if (count === 1 || count === '1') return null;
  const arr = [];
  for (let a = 1; a <= count; a++) {
    arr.push(a);
  }

  const onClickBtn = (elem) => () => {
    setNumberPage(elem);
    getNextPageItemsList( match.url, elem);
  };

  return (
    <div className='NavPage'>
      <div className="container NavPage__box">

        <ButtonsBox
          numberPage={numberPage}
          array={arr}
          onClickBtn={onClickBtn}
        />

      </div>
    </div>
  )
};

Navigation.defaultProps = {
  count: 0,
};

export default connect(
  ({listItems}) => ({
    count: (Math.ceil(listItems.count / 10))
  }),
  {
    getNextPageItemsList
  }
)(
  withRouter(Navigation)
);