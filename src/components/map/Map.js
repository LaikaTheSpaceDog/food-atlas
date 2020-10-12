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
            about: false,
            list: false
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
        this.setState({
            country: "",
            dish: "",
            description: "",
            photo: "",
            selected: false
        })
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
    
        const { country, dish, description, photo, selected, about, list } = this.state;

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
                    { !selected ?
                        <> 
                            <section className="map">
                                <header className="header">
                                    <button className="headButton" onClick={ this.handleAbout }><h2 className="subHeading">About</h2></button>
                                    <h1 className="heading">Food Atlas</h1>
                                    <button className="headButton" onClick={ this.handleList }><h2 className="subHeading">List</h2></button>
                                </header>
                                <div className="container">
                                    <ComposableMap width="1200" data-tip="" projectionConfig={{ scale: 200 }} >
                                        <ZoomableGroup>
                                            <Geographies geography={geoUrl}>
                                                {({ geographies }) =>
                                                    geographies.map(geo =>
                                                        <Geography 
                                                            key={geo.rsmKey} 
                                                            geography={geo}
                                                            onMouseEnter={() => {
                                                                const { NAME, DISH, DESCRIPTION, PHOTO } = geo.properties;
                                                                this.props.setTooltipContent(`${NAME}`);
                                                                this.handleEnter(NAME, DISH, DESCRIPTION, PHOTO);
                                                            }}
                                                            onMouseLeave={() => {
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
                                                                }
                                                            }}
                                                            onClick={() => { 
                                                                this.setState({
                                                                    selected: true
                                                                });
                                                                this.props.setTooltipContent("");
                                                            }} 
                                                        />
                                                    )
                                                }
                                            </Geographies>
                                        </ZoomableGroup>
                                    </ComposableMap>
                                </div>
                                <aside className="about" style={{ display: about ? "block" : "none" }}>
                                    <p className="asideText">Welcome to the Food Atlas! Here you can travel around the world in 197 dishes by simply clicking on a country to find out about one of its signature national dishes.</p>
                                    <p className="asideText">Some small nations may be hard to locate on the map due to its resolution, so please find them on the list instead if you are struggling!</p>
                                </aside>
                                <aside className="list" style={{ display: list ? "block" : "none" }}>
                                    <ul>

                                    </ul>
                                </aside>
                            </section>
                        </>
                    :
                        <Country country={ country } dish={ dish } description={ description } photo={ photo } handleBack={ this.handleBack } />
                    }
                </CSSTransition>
            </SwitchTransition>
        );
    }
}

export default memo(Map);
