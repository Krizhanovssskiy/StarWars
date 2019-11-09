import { POPULATE_PLANETS, CLAER_PLANET } from '../_constants';

export default (state = {}, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case POPULATE_PLANETS:
      return {...payload};

    case CLAER_PLANET:
      return {};

    default: return state;
  }
}