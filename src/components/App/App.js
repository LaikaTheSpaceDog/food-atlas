import React from 'react';
import Home from '../Home/Home';
import Country from '../Country/Country';
import FourOhFour from '../FourOhFour';
import "../../styles/css/styles.min.css";
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from"react-router-dom";

const App = ({ country }) => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:country" render={ ({ match }) => (
        <Country country={ country } />
      )} />
      <FourOhFour />
    </Switch>
  </Router>
);

export default App;
