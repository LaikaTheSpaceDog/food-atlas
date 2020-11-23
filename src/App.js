import React, {useState} from 'react';
import Home from './components/Home';
import "./styles/css/styles.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import ReactTooltip from "react-tooltip";


const App = () => {
    const [content, setContent] = useState("");

    return (
        <Router>
            <Home setTooltipContent={ setContent } />
            <ReactTooltip>{content}</ReactTooltip>
        </Router>
    );
};

export default App;
