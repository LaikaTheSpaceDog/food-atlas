import React, { memo, Component } from 'react';
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "../../data/topo.json";
import Country from '../Country/'
import { CSSTransition, SwitchTransition } from "react-transition-group";

class Map extends Component { 

    constructor(props){
        super(props);

        this.state = {
            country: "",
            dish: "",
            description: "",
            photo: "",
            selected: false,
        }

        this.handleBack = this.handleBack.bind(this);
        this.handleAbout = this.handleAbout.bind(this);
        this.handleList = this.handleList.bind(this);
    }

    handleEnter(country, dish, description, photo){
        this.setState({
            country: country,
            dish: dish,
            description: description,
            photo: photo
        })
    }

    handleBack(){
        setTimeout(() => {
            this.setState({
                country: "",
                dish: "",
                description: "",
                photo: "",
                selected: false
            })
        }, 1000);
    }

    handleAbout(){
        let current = this.state.about;
        this.setState({
            about: !current
        })
    }

    handleList(){
        let current = this.state.list;
        this.setState({
            list: !current
        })
    }
    
    render(){ 
    
        const { country, dish, description, photo, selected } = this.state;
        const countries = geoUrl.objects.ne_50m_admin_0_countries.geometries;

        return(
            <SwitchTransition>
                <CSSTransition
                    classNames="transition"
                    transitionAppearTimeout={50000}
                    key={ selected }
                    in={ selected }
                    unmountOnExit
                    appear
                >         
                    <> 
                        <section className="map">
                            <header className="header">
                                <button className="headButton" onClick={ this.handleAbout }><a className="subHeading" href="#about">About</a></button>
                                <h1 className="heading">Food Atlas</h1>
                                <button className="headButton" onClick={ this.handleList }><a className="subHeading" href="#list">List</a></button>
                            </header>
                            <div className="container">
                                <ComposableMap width="1200" data-tip="" projectionConfig={{ scale: 200 }} >
                                    <ZoomableGroup>
                                        <Geographies geography={geoUrl}>
                                            {({ geographies }) =>
                                                geographies.map(geo =>
                                                    <a href="#country">
                                                        <Geography 
                                                            key={geo.rsmKey} 
                                                            geography={geo}
                                                            onMouseEnter={() => {
                                                                const { NAME } = geo.properties;
                                                                this.props.setTooltipContent(`${NAME}`);
                                                            }}
                                                            onMouseLeave={() => {
                                                                this.props.setTooltipContent("");
                                                            }}
                                                            onClick={() => {
                                                                const { NAME, DISH, DESCRIPTION, PHOTO } = geo.properties;
                                                                this.handleEnter(NAME, DISH, DESCRIPTION, PHOTO);
                                                            }}
                                                            fill="#44BBA4"
                                                            stroke="#E94F37"
                                                            strokeWidth="0.5"
                                                            style={{
                                                                default: {
                                                                    outline: 'none'
                                                                },
                                                                hover: {
                                                                    fill: "#E94F37",
                                                                    outline: 'none'
                                                                },
                                                                pressed: {
                                                                    outline: 'none'
                                                                }
                                                            }}
                                                        />
                                                    </a>
                                                )
                                            }
                                        </Geographies>
                                    </ZoomableGroup>
                                </ComposableMap>
                            </div>
                            <div className="overlay" id="about">
                                <aside className="about">
                                    <a class="close" href="#" onClick={ this.handleAbout }>&times;</a>
                                    <p className="asideText centre">Welcome to the Food Atlas!</p>
                                    <p className="asideText">Travel around the world in 197(ish) dishes by simply clicking on a country to find out about one of its signature national dishes.</p>
                                    <p className="asideText">Some small nations may be hard to locate on the map due to its resolution, so please find them on the list instead if you are struggling!</p>
                                </aside>
                            </div>
                            <div className="overlay" id="list">
                                <aside className="list">
                                    <a class="close" href="#" onClick={ this.handleList }>&times;</a>
                                    <ul className="countryList">
                                        { countries.map(geo =>
                                            <li className="listItem"><a href="#country" onClick={() => {
                                                const { NAME, DISH, DESCRIPTION, PHOTO } = geo.properties;
                                                this.handleEnter(NAME, DISH, DESCRIPTION, PHOTO);
                                            }}>{ geo.properties.NAME }</a></li>
                                        )}
                                    </ul>
                                </aside>
                            </div>
                            <div className="overlay" id="country">
                                <Country country={ country } dish={ dish } description={ description } photo={ photo } handleBack={ this.handleBack } />
                            </div>
                        </section>
                    </>
                </CSSTransition>
            </SwitchTransition>
        );
    }
}

export default memo(Map);
