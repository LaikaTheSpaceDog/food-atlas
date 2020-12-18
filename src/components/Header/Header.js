import React, { useState } from 'react';

const Header = ({handleAbout, handleList, handleLogin, loggedIn, token, dispatchLogout}) => {

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
                        <li><a className="subHeading headButton" href="#logout" onClick={ handleLogout }>Log Out</a></li>                

                    :
                        <li><a className="subHeading headButton" href="#login" onClick={ handleLogin }>Register/Log In</a></li>                
                    }
                    <li><a className="subHeading headButton" href="#about" onClick={ handleAbout }>About</a></li>
                    <li><a className="subHeading headButton" href="#list" onClick={ handleList }>Countries</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;