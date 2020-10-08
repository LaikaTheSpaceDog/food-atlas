import React from 'react';
import{ Link } from"react-router-dom";
import Back from "../../styles/assets/svg/angle-circle-left.svg";

const Country = ({ name }) => {

    return (
        <>
            <Link to="/"><img alt="backwards arrow" src={ Back } className="button"></img></Link>
            <h1 className="heading">{ name }</h1>
            <h2 className="subHeading">National Dish: TEST</h2>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eum quia velit mollitia, error officia repudiandae sit placeat, et deleniti nihil aliquam non. Sed vel et molestias incidunt molestiae officiis.</p>
        </>
    );
}

export default Country;