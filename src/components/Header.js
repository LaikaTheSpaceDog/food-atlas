import React from 'react';

const Header = ({handleAbout, handleList, handleLogin}) => {

    return (
        <header className="header">
            <button className="headButton"><a className="subHeading" href="#list" onClick={ handleList }>List</a></button>
            <h1 className="headButton"><a className="heading" href="#about" onClick={ handleAbout }>Food Atlas</a></h1>
            <button className="headButton"><a className="subHeading" href="#login" onClick={ handleLogin }>Login</a></button>
        </header>
    );
}

export default Header;