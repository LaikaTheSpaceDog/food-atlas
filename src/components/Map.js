import React, { memo } from 'react';
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "../data/topo.json";
import Country from './Country';
import List from './List';
import About from './About';
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { PersistentComponent } from 'react-persistent-state';

class Map extends PersistentComponent { 

    constructor(props){
        super(props);

        this.state = {
            country: "",
            dish: "",
            description: "",
            photo: "",
            recipe: "",
            cssTrans: false,
            selected: false
        }

        this.handleBack = this.handleBack.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleEnter(country, dish, description, photo, recipe){
        this.setState({
            country: country,
            dish: dish,
            description: description,
            photo: photo,
            recipe: recipe,
            selected: true
        })
    }

    handleBack(){
        this.setState({
            selected: false
        });
        setTimeout(() => {
            this.setState({
                country: "",
                dish: "",
                description: "",
                photo: "",
                recipe: ""
            }) 
        }, 1000);
    }

    handlePhotoSource = (photo) => {
        const url = new URL(photo);
        return url.hostname;
    }
    
    render(){ 
    
        const { country, dish, description, photo, recipe, selected, cssTrans } = this.state;

        return(
            <SwitchTransition>
                <CSSTransition
                    classNames="transition"
                    transitionAppearTimeout={50000}
                    timeout={500000}
                    key={ cssTrans }
                    in={ cssTrans }
                    unmountOnExit
                    appear
                >         
                    <> 
                        <section className="map" id="home">
                            <header className="header">
                                <button className="headButton"><a className="subHeading" href="#about">About</a></button>
                                <h1 className="heading">Food Atlas</h1>
                                <button className="headButton"><a className="subHeading" href="#list">List</a></button>
                            </header>
                            <div className="container">
                                <ComposableMap width={1200} style={{ width: "100%" }} data-tip="" projectionConfig={{ scale: 200 }} >
                                    <ZoomableGroup>
                                        <Geographies geography={geoUrl}>
                                            {({ geographies }) =>
                                                geographies.map(geo =>
                                                    <a href="/food-atlas/#country" key={ geo.properties.NAME }>
                                                        <Geography 
                                                            key={geo.rsmKey} 
                                                            geography={geo}
                                                            onMouseOver={() => {
                                                                const { NAME } = geo.properties;
                                                                this.props.setTooltipContent(`${NAME}`);
                                                            }}
                                                            onMouseOut={() => {
                                                                this.props.setTooltipContent("");
                                                            }}
                                                            onClick={() => {
                                                                const { NAME, DISH, DESCRIPTION, PHOTO, RECIPE } = geo.properties;
                                                                this.handleEnter(NAME, DISH, DESCRIPTION, PHOTO, RECIPE);
                                                                this.props.setTooltipContent("");
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
                                                                },
                                                                cursor:'pointer'
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
                                    <About />
                                </div>
                                <div className="overlay" id="list">
                                    <List handleEnter={ this.handleEnter } />
                                </div>
                            <div className="overlay" id="country">
                                <Country selected={ selected } country={ country } dish={ dish } description={ description } photo={ photo } recipe={ recipe } handleBack={ this.handleBack } handlePhotoSource={ this.handlePhotoSource } />
                            </div>
                            <footer className="footer">
                                <h2 className="text">Made by <a className="link" href="https://github.com/LaikaTheSpaceDog" target="_blank" rel="noopener noreferrer">LaikaTheSpaceDog</a></h2>
                            </footer>
                        </section>
                    </>
                </CSSTransition>
            </SwitchTransition>
        );
    }
}

export default memo(Map);
