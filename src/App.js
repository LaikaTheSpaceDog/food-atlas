import React from 'react';
import Home from './components/Home/Home';
import Country from './components/Country/Country';
import "./styles/css/styles.min.css";
import { 
  BrowserRouter as Router,
  Route,
} from"react-router-dom";

const App = () => (
  <Router>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/:name" render={ ({ match }) => (
      <Country name={ match.params.name } />
    )} />
  </Router>
);

export default App;
