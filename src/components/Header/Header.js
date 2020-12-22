import React, { useState } from 'react';

const Header = ({handleAboutView, handleListView, handleLoginView, loggedIn, token, dispatchLogout, handleFavouritesView}) => {

    const [hovered, setHovered] = useState(false);
    const hover = () => setHovered(true);

    let handleLogout = () => {
        dispatchLogout(token);
    }
    
    return (
        <header className="header">
            <div className="headContainer" onMouseEnter={ hover }>
                <h1 className="heading">Food Atlas</h1>
            </div>
            <nav className={ !hovered ? "hidden" : "dropdown-content" }>
                <ul>
                    {loggedIn ?
                        <>
                            <li><a className="subHeading headButton" href="#logout" onClick={ handleLogout }>Log Out</a></li>
                            <li><a className="subHeading headButton" href="#favourites" onClick={ handleFavouritesView }>Favourites</a></li>
                        </>                
                    :
                        <li><a className="subHeading headButton" href="#login" onClick={ handleLoginView }>Register/Log In</a></li>                
                    }
                    <li><a className="subHeading headButton" href="#about" onClick={ handleAboutView }>About</a></li>
                    <li><a className="subHeading headButton" href="#list" onClick={ handleListView }>Countries</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;