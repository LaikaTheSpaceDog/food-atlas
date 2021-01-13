import React, { useState } from 'react';

const Header = ({handleAboutView, handleListView, loggedIn, handleFavouritesView, dispatchFavourites}) => {

    const [hovered, setHovered] = useState(false);
    const hover = () => setHovered(true);
    
    let favouritesViewApi = () => {
        dispatchFavourites();
        handleFavouritesView();
    }

    return (
        <header className="header">
            <div className="headContainer" onMouseEnter={ hover }>
                <h1 className="heading">Food Atlas</h1>
            </div>
            <nav className={ !hovered ? "hidden" : "dropdown-content" }>
                <ul>
                    <li><a className="subHeading headButton" href="#about" onClick={ handleAboutView }>About</a></li>
                    <li><a className="subHeading headButton" href="#list" onClick={ handleListView }>Countries</a></li>
                    {!loggedIn ? null :
                        <li><a className="subHeading headButton" href="#favourites" onClick={ favouritesViewApi }>Favourites</a></li>          
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;