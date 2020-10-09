import React, { useState } from 'react';
import Map from '../Map/';
import ReactTooltip from "react-tooltip";

const Home = () => {
    const [content, setContent] = useState("");
    return (
        <>
            <h1 className="heading">Food Atlas</h1>
            <Map setTooltipContent={ setContent } />
            <ReactTooltip>{content}</ReactTooltip>
        </>
    );
}

export default Home;