import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getItem, clearItem } from '../../_actions';
import { useImgBigItem } from '../../_helpers/customHooks';

import Loading from "../Loading";

const PlanetDetails = ({item, match, getItem, clearItem}) => {
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
              <span>climate :</span>
              <p>{item.climate}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>diameter :</span>
              <p>{item.diameter} km.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>gravity :</span>
              <p>{item.gravity}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>orbital period :</span>
              <p>{item.orbital_period} days.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>rotation period :</span>
              <p>{item.rotation_period} days.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>population :</span>
              <p>{item.population}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>surface water :</span>
              <p>{item.surface_water} %</p>
            </li>

            {/*<li>residents {item}</li>*/}
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
  withRouter(PlanetDetails)
);