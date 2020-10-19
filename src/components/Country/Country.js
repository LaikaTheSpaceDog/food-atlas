import React from 'react';
import back from "../../styles/assets/svg/angle-circle-left.svg";

const Country = ({ country, dish, description, photo, recipe, handleBack }) => {

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
                <div className="photoContainer">
                    <img className="photo" src={ photo } alt={ `${ dish }, the national dish of ${ country }` } />
                </div>
                <div className="description">
                    <p className="text">{ description }</p>
                    <a href={ recipe } target="_blank" className="text link">Recipe</a>
                </div>
            </section>
        </article>
    );
}

export default Country;