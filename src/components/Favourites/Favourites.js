import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

class Favourites extends Component {

    constructor(props, context) {
        super(props, context);

        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.escFunction = this.escFunction.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener("keydown", this.escFunction, false);
        if (this.props.loggedIn){
            this.props.dispatchFavourites()
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener("keydown", this.escFunction, false);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
      }
    
    handleClickOutside(event) {
        if (this.props.favourites && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.history.push('/food-atlas');
            this.props.handleFavouritesView();
        }
    }

    escFunction(event){
        if(this.props.favourites && event.keyCode === 27) {
            this.props.history.push("/food-atlas");
            this.props.handleFavouritesView();
        }
    }

    render(){
        const {handleFavouritesView, favourites, favouriteCountries, handleEnter} = this.props;

        return (
            <CSSTransition
                classNames="transition"
                transitionappeartimeout={500}
                timeout={500}
                in={ favourites }
                unmountOnExit
                appear
            >   
                <div className="overlay" id="favourites">
                    <div className="wrapper" ref={this.setWrapperRef}>
                        <aside className="favourites">
                            <span className="closeButton" onClick={handleFavouritesView}></span>
                            <p className="asideHeading">Favourites</p>
                            <div className="listContainer">
                                <ul className="favouriteList">
                                    {favouriteCountries.sort((a, b) => (a.name > b.name) ? 1 : -1).map(function(country, i) {
                                        return <li className="listItem" key={i} onClick={() => {
                                            const { name, dish, description, photo, recipe } = country;
                                            handleEnter(name, dish, description, photo, recipe);
                                            handleFavouritesView();
                                        }}>{`${country.name}: ${country.dish} `}</li>
                                    })}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </CSSTransition>
        );
    }
}

export default withRouter(Favourites);