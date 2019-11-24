import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HmePages from "./Pages/HomePage/HomePage";
import Movies from './Pages/Movies/Movies'
import MovieDetailsPage from './Pages/MovieDetailsPage/MovieDetailsPage'

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route path="/" exact component={HmePages} />
      <Route path="/movies/:id" component={MovieDetailsPage}/>
      <Route path="/movies?:query" component={Movies}/>
      <Route path="/movies" component={Movies}/>
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
