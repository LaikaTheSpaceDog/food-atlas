import React from 'react';
import Home from './components/Home/Home';
import Country from './components/Country/Country';
import FourOhFour from './components/FourOhFour';
import "./styles/css/styles.min.css";
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from"react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:country" render={ ({ match }) => (
        <Country country={ match.params.country } />
      )} />
      <FourOhFour />
    </Switch>
  </Router>
);

export default App;
