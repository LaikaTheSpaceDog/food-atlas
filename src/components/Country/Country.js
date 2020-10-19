import React from 'react';
import back from "../../styles/assets/svg/angle-circle-left.svg";

const Country = ({ country, dish, description, photo, handleBack }) => {

    return (
        !dish ? 
        <article className="country">
            <header className="countryHeader">
                <a href="#" onClick={ handleBack }><img alt="backwards arrow" src={ back } className="button"></img></a>
                <div className="countryTitles">
                    <h1 className="heading">{ country }</h1>
                    <h2 className="subHeading">It's a mystery to me to...</h2>
                </div>
            </header>
            <section className="countryBody">
                <p className="text description">The data for this country hasn't been added yet - please check back later!</p>
            </section>
        </article>
        :
        <article className="country">
            <header className="countryHeader">
                <a href="#" onClick={ handleBack }><img alt="backwards arrow" src={ back } className="button"></img></a>
                <div className="countryTitles">
                    <h1 className="heading">{ country }</h1>
                    <h2 className="subHeading">{ dish }</h2>
                </div>
            </header>
            <section className="countryBody">
                <img className="photo" src={ photo } alt={ `${ dish }, the national dish of ${ country }` } />
                <p className="text description">{ description }</p>
            </section>
        </article>
    );
}

export default Country;