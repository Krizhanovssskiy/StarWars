import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getItem, clearItem } from '../../_actions';
import { useImgBigItem } from '../../_helpers/customHooks';
import _pull_out_path from "../../_helpers/_pull_out_path";

import Loading from "../Loading";

const PeopleDetails = ({item, match, getItem, clearItem}) => {
  const { url } = match;
  const path = _pull_out_path(url);

  const imgCategori = path[1] === 'people' ? 'characters' : url;

  const { urlImg, setUrlImg } = useImgBigItem(`/${imgCategori}/${item.id}`);

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
              <h3>{item.name}</h3>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>birth year :</span>
              <p>{item.birth_year}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>height :</span>
              <p>{item.height} cm.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>mass :</span>
              <p>{item.mass} kg.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>gender :</span>
              <p>{item.gender}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>skin color :</span>
              <p>{item.skin_color}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>hair color :</span>
              <p>{item.hair_color}.</p>
            </li>
            <li className='ItemDetails__item-detail'>
              <span>eyes color :</span>
              <p>{item.eye_color}.</p>
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
  withRouter(PeopleDetails)
);