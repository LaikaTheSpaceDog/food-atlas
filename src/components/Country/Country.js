import React from 'react';
import{ Link } from"react-router-dom";
import back from "../../styles/assets/svg/angle-circle-left.svg";

const Country = ({ country, handleClick }) => {

    return (
        <>
            <Link to="/" onClick={ handleClick }><img alt="backwards arrow" src={ back } className="button"></img></Link>
            <h1 className="heading">{ country }</h1>
            <h2 className="subHeading">National Dish: TEST</h2>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eum quia velit mollitia, error officia repudiandae sit placeat, et deleniti nihil aliquam non. Sed vel et molestias incidunt molestiae officiis.</p>
        </>
    );
}

export default Country;