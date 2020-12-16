import React, { useState } from 'react';

const Header = ({handleAbout, handleList, handleLogin}) => {

    const [hovered, setHovered] = useState(false);
    const hover = () => setHovered(true);
    
    return (
        <header className="header">
            <div className="headContainer" onMouseEnter={ hover }>
                <h1 className="heading">Food Atlas</h1>
            </div>
            <nav className={ !hovered ? "hidden" : "dropdown-content" }>
                <ul>
                    <li><a className="subHeading headButton" href="#login" onClick={ handleLogin }>Register/Log In</a></li>                
                    <li><a className="subHeading headButton" href="#about" onClick={ handleAbout }>About</a></li>
                    <li><a className="subHeading headButton" href="#list" onClick={ handleList }>Countries</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;