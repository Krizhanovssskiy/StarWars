import { useState, useEffect } from 'react';

export const useImgBigItem = (url) => {
  const [ urlImg, setUrlImg ] = useState(
    `https://starwars-visualguide.com/assets/img${url}.jpg`
  );

  useEffect(() => {
    setUrlImg(
      `https://starwars-visualguide.com/assets/img${url}.jpg`
    )
  }, [url]);

  return { urlImg, setUrlImg };

};
