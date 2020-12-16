import React from 'react';

const Header = ({handleAbout, handleList, handleLogin}) => {

    return (
        <header className="header">
            <div className="headContainer">
                <h1 className="heading">Food Atlas</h1>
            </div>
            <nav className="dropdown-content">
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