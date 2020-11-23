import React from 'react';

const Header = ({handleAbout, handleList}) => {

    return (
        <header className="header">
            <button className="headButton"><a className="subHeading" href="#about" onClick={ handleAbout }>About</a></button>
            <h1 className="heading">Food Atlas</h1>
            <button className="headButton"><a className="subHeading" href="#list" onClick={ handleList }>List</a></button>
        </header>
    );
}

export default Header;