import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getItem, clearItem } from '../../_actions';
import { useImgBigItem } from '../../_helpers/customHooks';

import Loading from "../Loading";

const StarshipDetails = ({item, match, getItem, clearItem}) => {
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
              <span>model :</span>
              <p>{item.model}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>class :</span>
              <p>{item.starship_class}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>max atmosphering speed :</span>
              <p>{item.max_atmosphering_speed} km/h.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>length :</span>
              <p>{item.length} m.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>crew :</span>
              <p>{item.crew}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>cargo capacity :</span>
              <p>{item.cargo_capacity} kg.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>cost in credits :</span>
              <p>{item.cost_in_credits} credits.</p>
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
  withRouter(StarshipDetails)
);