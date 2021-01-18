import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

class Country extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.escFunction = this.escFunction.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener("keydown", this.escFunction, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener("keydown", this.escFunction, false);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
      }
    
    handleClickOutside(event) {
        if (this.props.selected && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.handleBack();
        }
    }

    escFunction(event){
        if(this.props.selected && event.keyCode === 27) {
            this.props.handleBack();
        }
    }

    checkFavourites(faves){
        let found = false;
        for(let i = 0; i < faves.length; i +=1){
            if (faves[i].name === this.props.country){
                found = true;
                break;
            }
        }
        return found;
    }

    handleLike(){
        if(this.props.loggedIn){
            this.props.dispatchLike(this.props.country);
            setTimeout(() => {this.props.dispatchFavourites()}, 500);
        }
    }

    render(){
        const { country, dish, description, photo, recipe, handleBack, handlePhotoSource, selected, favourites, loggedIn } = this.props;

        return (
            <CSSTransition
                classNames="transition"
                transitionappeartimeout={500}
                timeout={500}
                in={ selected }
                unmountOnExit
                appear
                exit
            >   
                <div className="overlay" id="country">
                    <div className="wrapper" ref={this.setWrapperRef}>
                    {
                    country && !dish ? 
                        <article className="country noData">
                            <header className="countryHeader">
                                <div className="countryTitles">
                                    <h1 className="heading">{ country }</h1>
                                    <h2 className="subHeading">It's a mystery to me...</h2>
                                </div>
                                <span className="close" onClick={ handleBack }></span>
                            </header>
                            <section className="countryBody">
                                <p className="text description">There's currently no data on this place! If you have any suggestions, <span><a className="link" href="mailto:oscarjwales@gmail.com" target="_blank" rel="noopener noreferrer">please get in touch</a></span>!</p>
                            </section>
                        </article>
                    : !country ?
                        <article className="country noData">
                            <header className="countryHeader">
                                <div className="countryTitles">
                                    <h2 className="subHeading">Something went wrong :(</h2>
                                </div>
                                <span className="close" onClick={ handleBack }></span>
                            </header>
                        </article>
                    :
                        <article className="country">
                            <header className="countryHeader">
                                { loggedIn ?
                                    this.checkFavourites(favourites) ?
                                        <span className="heartOrange" onClick={this.handleLike}></span>
                                    :    
                                        <span className="heart" onClick={this.handleLike}></span>
                                    :
                                        null
                                }
                                <span className="close" onClick={ handleBack }></span>
                                <div className="countryTitles">
                                    <h1 className="heading">{ country }</h1>
                                    <h2 className="subHeading">{ dish }</h2>
                                </div>
                            </header>
                            <section className="countryBody">
                                <figure className="photoContainer">
                                    <img className="photo" src={ photo } alt={ `${ dish }, the national dish of ${ country }` } />
                                    <figcaption className="caption">Photo courtesy of { handlePhotoSource(photo) }</figcaption>
                                </figure>
                                <div className="description">
                                    <p className="text">{ description }</p>
                                    <a className="link underline" href={ recipe }>Learn to cook it here!</a>
                                </div>
                            </section>
                        </article>
                    }
                    </div>
                </div>
            </CSSTransition>
        );
    };
};

export default withRouter(Country);