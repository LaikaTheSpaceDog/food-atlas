import React, { useState, useRef, useEffect } from 'react';

const useHeader = (ref, click, clicked) => {
        
    useEffect(() => {
        let handleClickOutside = (event) => {
            if(ref.current && clicked && !ref.current.contains(event.target)){
                click();
            }
        };

        let escFunction = (event) => {
            if(ref.current && clicked && event.keyCode === 27) {
                click();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [ref, click, clicked]);
}

export default function Header({handleAboutView, handleListView, loggedIn, handleFavouritesView, dispatchFavourites}){
    const wrapperRef = useRef(null);
    const [dropped, setDrop] = useState(false);
    const [clicked, setClicked] = useState(false);
    const drop = () => setDrop(true);
    const click = () => setClicked(!clicked);
    
    useHeader(wrapperRef, click, clicked);

    
    let favouritesViewApi = () => {
        dispatchFavourites();
        handleFavouritesView();
    }

    let handleClick = () => {
        click();
        drop();
    }
    
    return (
        <div ref={wrapperRef}>
            <header onClick={ handleClick } className={ clicked ? "headerDrop" : "header" }>
                <div className="headContainer">
                    <h1 className="heading">Food Atlas</h1>
                </div>
                <nav className={ !dropped ? "hidden" : "dropdown-content" }>
                    <ul>
                        <li><a className="subHeading headButton" href="#about" onClick={ handleAboutView }>About</a></li>
                        <li><a className="subHeading headButton" href="#list" onClick={ handleListView }>Countries</a></li>
                        {!loggedIn ? null :
                            <li><a className="subHeading headButton" href="#favourites" onClick={ favouritesViewApi }>Favourites</a></li>          
                        }
                    </ul>
                </nav>
            </header>
        </div>
    );
};