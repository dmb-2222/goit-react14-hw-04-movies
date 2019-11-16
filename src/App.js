import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HmePages from "./Pages/HomePage/HomePage";
import Movies from './Pages/Movies/Movies'
const App = () => (
  <>
    <Nav />
    <Switch>
      <Route path="/" exact component={HmePages} />
      <Route pach="/movies" component={Movies}/>
    </Switch>
  </>
);

export default App;
