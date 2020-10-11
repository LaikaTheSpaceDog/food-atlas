import React from 'react';
import{ Link } from"react-router-dom";
import back from "../../styles/assets/svg/angle-circle-left.svg";

const Country = ({ country, dish, description, photo, handleClick, handleBack }) => {

    return (
        <>
            <Link to="/" onClick={ handleBack }><img alt="backwards arrow" src={ back } className="button"></img></Link>
            <h1 className="heading">{ country }</h1>
            <h2 className="subHeading">{ dish }</h2>
            <img className="photo" src={ photo } alt={ `${ dish }, the national dish of ${ country }` } />
            <p className="text description">{ description }</p>
        </>
    );
}

export default Country;