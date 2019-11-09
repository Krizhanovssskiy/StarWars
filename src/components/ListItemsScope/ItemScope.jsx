import React, { useState, useEffect } from 'react';

import placeholder from '../../img/placeholder.jpg'

const ItemScope = ({ item, onSelectedItem, categori }) => {

  const imgCategori = categori === '/people/' ? '/characters/' : categori;

  const [ urlImg, setUrlImg ] = useState(
    `https://starwars-visualguide.com/assets/img${imgCategori}${item.id}.jpg`
  );

  useEffect(() => {
    setUrlImg(
      `https://starwars-visualguide.com/assets/img${imgCategori}${item.id}.jpg`
    )
  }, [imgCategori]);

  const onErrorImg = () => {
    setUrlImg(placeholder);
  };
  return (
    <li
      onClick={onSelectedItem}
    >
      <div className='ListItemsScope__imgBox'>
        <img
          src={urlImg}
          alt=""
          onError={onErrorImg}
        />
      </div>
      <div className='ListItemsScope__textBox'>
        <p>
          {
            item.name || item.title
          }
        </p>
      </div>
    </li>
  );
};

export default ItemScope;