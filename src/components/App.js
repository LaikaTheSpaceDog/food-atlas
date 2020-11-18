import React from 'react';
import Home from './Home';
import "../styles/css/styles.min.css";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
    <Router>
        <Home />
    </Router>
);

export default App;
