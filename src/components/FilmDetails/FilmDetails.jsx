import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getItem, clearItem } from '../../_actions';
import { useImgBigItem } from '../../_helpers/customHooks';

import Loading from "../Loading";

const FilmDetails = ({item, match, getItem, clearItem}) => {
  const { url } = match;

  const { urlImg, setUrlImg } = useImgBigItem(url);

  useEffect(() => {
    getItem(url);
    return () => clearItem();
  }, [ getItem, url.id]);

  const onErrorImg = () => {
    setUrlImg(`https://starwars-visualguide.com/assets/img/big-placeholder.jpg`)
  };
  if (Object.keys(item).length === 0) return <Loading />;

  return(
    <div className="ItemDetails">
      <div className="container ItemDetails__item-box">
        <div className="ItemDetails__details-box">
          <div className='ItemDetails__img-box'>
            <img
              src={urlImg}
              alt=""
              onError={onErrorImg}
            />
          </div>
          <ul className='ItemDetails__list-detail'>
            <li className='ItemDetails__item-detail'>
              <h3>{item.title}</h3>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>release date :</span>
              <p>{item.release_date}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>director :</span>
              <p>{item.director}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>producer :</span>
              <p>{item.producer}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>opening crawl :</span>
              <p>{item.opening_crawl}.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default connect(
  ({item}) => ({
    item
  }),
  {
    getItem,
    clearItem
  }
)(
  withRouter(FilmDetails)
);