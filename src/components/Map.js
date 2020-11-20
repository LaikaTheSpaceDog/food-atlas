import React, { memo } from 'react';
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "../data/topo.json";
import Country from './Country';
import List from './List';
import About from './About';
import { CSSTransition } from "react-transition-group";
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
            selected: false,
            about: false,
            list: false,
            cssTrans: true
        }

        this.handleBack = this.handleBack.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleAbout = this.handleAbout.bind(this);
        this.handleList = this.handleList.bind(this);
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
        }, 500);
    }

    handlePhotoSource = (photo) => {
        const url = new URL(photo);
        return url.hostname;
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
    
        const { country, dish, description, photo, recipe, selected, about, list, cssTrans } = this.state;

        return(
            <CSSTransition
                classNames="transition"
                transitionAppearTimeout={500}
                timeout={500}
                in={ cssTrans }
                unmountOnExit
                appear
            >         
                <> 
                    <section className="map" id="home">
                        <header className="header">
                            <button className="headButton"><a className="subHeading" href="#about" onClick={ this.handleAbout }>About</a></button>
                            <h1 className="heading">Food Atlas</h1>
                            <button className="headButton"><a className="subHeading" href="#list" onClick={ this.handleList }>List</a></button>
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
                        <About handleAbout={ this.handleAbout } about={about} />
                        <List handleEnter={ this.handleEnter } handleList={ this.handleList } list={list} />
                        <Country selected={ selected } country={ country } dish={ dish } description={ description } photo={ photo } recipe={ recipe } handleBack={ this.handleBack } handlePhotoSource={ this.handlePhotoSource } />
                        <footer className="footer">
                            <h2 className="text">Made by <a className="link" href="https://github.com/LaikaTheSpaceDog" target="_blank" rel="noopener noreferrer">LaikaTheSpaceDog</a></h2>
                        </footer>
                    </section>
                </>
            </CSSTransition>
        );
    }
}

export default memo(Map);
