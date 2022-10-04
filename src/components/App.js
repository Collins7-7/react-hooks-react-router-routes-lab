import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <>
    <NavBar />
    <Switch>
      <Route>
        <Home exact path="/"/>
      </Route>
      <Route>
        <Movies exact path ="/movies"/>
      </Route>
      <Route>
        <Directors exact path ="/directors"/>
      </Route>
      <Route>
        <Actors exact path ="/actors"/>
      </Route>
      </Switch>
      </>;
}

export default App;
