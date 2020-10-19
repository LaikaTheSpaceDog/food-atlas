import React, { useState } from 'react';
import Map from './Map';
import ReactTooltip from "react-tooltip";

const Home = () => {
    const [content, setContent] = useState("");
    return (
        <>
            <Map setTooltipContent={ setContent } />
            <ReactTooltip>{content}</ReactTooltip>
        </>
    );
}

export default Home;