import character from '../img/character.jpg';
import films from '../img/films.jpg';
import planets from '../img/planets.jpg';
import species from '../img/species.jpg';
import starships from '../img/starships.jpg';
import vehicles from '../img/vehicles.jpg';


export default () => {
  return [
    {
      id: 1,
      img: films,
      nameCategorie: 'films'
    },
    {
      id: 2,
      img: character,
      nameCategorie: 'people'
    },
    {
      id: 3,
      img: species,
      nameCategorie: 'species'
    },
    {
      id: 4,
      img: starships,
      nameCategorie: 'starships'
    },
    {
      id: 5,
      img: vehicles,
      nameCategorie: 'vehicles'
    },
    {
      id: 6,
      img: planets,
      nameCategorie: 'planets'
    },
  ]
}