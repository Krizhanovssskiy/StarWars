import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getItem, clearItem } from '../../_actions';
import { useImgBigItem } from '../../_helpers/customHooks';

import Loading from "../Loading";

const SpeciesDetails = ({item, match, getItem, clearItem}) => {
  const { url } = match;
  const { urlImg, setUrlImg } = useImgBigItem(url);

  useEffect(() => {
    getItem(url);
    return () => clearItem();
  }, [ getItem, url]);

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
              <h3>{item.name}</h3>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>classification :</span>
              <p>{item.classification}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>designation :</span>
              <p>{item.designation}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>language :</span>
              <p>{item.language} km/h.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>average lifespan :</span>
              <p>{item.average_lifespan} year.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>average height :</span>
              <p>{item.average_height} cm.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>hair colors :</span>
              <p>{item.hair_colors}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>skin colors :</span>
              <p>{item.skin_colors}.</p>
            </li>

            <li className='ItemDetails__item-detail'>
              <span>eye colors :</span>
              <p>{item.eye_colors}.</p>
            </li>
            {/*<li>films {item}</li>*/}
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
  withRouter(SpeciesDetails)
);