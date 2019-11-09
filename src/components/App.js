import './style.scss';
import '../scss/base.scss';
import React from 'react';
import {Route, Switch} from 'react-router-dom'

import ErrorBoundri from "./ErrorBoundri";
import Header from "./Header";
import OwnPage from "./ListCaregories";
import ListItemsScope from "./ListItemsScope";
import PlanetDetails from "./PlanetDetails";
import VehiclesDetails from "./VehiclesDetails";
import SpeciesDetails from "./SpeciesDetails";
import StarshipDetails from "./StarshipDetails";
import PeopleDetails from "./PeopleDetails";
import FilmDetails from "./FilmDetails";
import Footer from "./Footer";


function App() {

  return (
    <div className='App'>
      <div className='stars'/>
      <div className="twinkling"/>


      <div className="Content">
        <ErrorBoundri>

          <Header/>

          <Switch>
            <Route path="/" exact component={OwnPage}/>
            <Route
              path="/films/"
              exact
              component={ListItemsScope}
            />
            <Route path="/films/:id" component={FilmDetails}/>
            <Route
              path="/planets/"
              exact
              component={ListItemsScope}
            />
            <Route path="/planets/:id" component={PlanetDetails}/>
            <Route
              path="/vehicles/"
              exact
              component={ListItemsScope}
            />
            <Route path="/vehicles/:id" component={VehiclesDetails}/>
            <Route
              path="/starships/"
              exact
              component={ListItemsScope}
            />
            <Route path="/starships/:id" component={StarshipDetails}/>
            <Route
              path="/species/"
              exact
              component={ListItemsScope}
            />
            <Route path="/species/:id" component={SpeciesDetails}/>
            <Route
              path="/people/"
              exact
              component={ListItemsScope}
            />
            <Route path="/people/:id" component={PeopleDetails}/>

          </Switch>

          <Footer/>
        </ErrorBoundri>
      </div>

    </div>
  );
}

export default App;
