import React from 'react';

const About = () => {

    return (
        <aside className="about">
            <a className="close" href="#home">&times;</a>
            <div className="aboutText">
                <p className="asideText centre">Welcome to the Food Atlas!</p>
                <p className="asideText">Travel around the world in 197(ish) dishes by simply clicking on a country to find out about one of its signature national dishes.</p>
                <p className="asideText">Some small nations may be hard to locate on the map due to its resolution, so please find them on the <a className="link" href="#list">list</a> instead if you are struggling!</p>
            </div>
        </aside>
    );
}

export default About;