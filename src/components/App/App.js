import React from 'react';
import Home from '../Home/Home';
import Country from '../Country/';
import FourOhFour from '../FourOhFour';
import "../../styles/css/styles.min.css";
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from"react-router-dom";

const App = ({ country, dish, description, photo }) => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path={ `/:${ country }` } render={ () => (
        <Country country={ country } dish={ dish } description={ description } photo={ photo } />
      )} />
      <FourOhFour />
    </Switch>
  </Router>
);

export default App;
