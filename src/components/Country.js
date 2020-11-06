import React from 'react';

const Country = ({ country, dish, description, photo, recipe, handleBack, handlePhotoSource }) => {

    return (
        !dish ? 
        <article className="country noData">
            <header className="countryHeader">
                <div className="countryTitles">
                    <h1 className="heading">{ country }</h1>
                    <h2 className="subHeading">It's a mystery to me...</h2>
                </div>
                <a href="#home" onClick={ handleBack }><span className="button"></span></a>
            </header>
            <section className="countryBody">
                <p className="text description">There's currently no data on this place! If you have any suggestions, <span><a className="link" href="mailto:oscarjwales@gmail.com" target="_blank" rel="noopener noreferrer">please get in touch</a></span>!</p>
            </section>
        </article>
        :
        <article className="country">
            <header className="countryHeader">
                <a href={ recipe } target="_blank" rel="noopener noreferrer"><span className="recipe"></span></a>
                <div className="countryTitles">
                    <h1 className="heading">{ country }</h1>
                    <h2 className="subHeading">{ dish }</h2>
                </div>
                <a href="#home" onClick={ handleBack }><span className="button"></span></a>
            </header>
            <section className="countryBody">
                <figure className="photoContainer">
                    <img className="photo" src={ photo } alt={ `${ dish }, the national dish of ${ country }` } />
                    <figcaption className="caption">Photo courtesy of { handlePhotoSource(photo) }</figcaption>
                </figure>
                <div className="description">
                    <p className="text">{ description }</p>
                </div>
            </section>
        </article>
    );
}

export default Country;