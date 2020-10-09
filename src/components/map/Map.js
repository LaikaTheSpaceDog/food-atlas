import React, { memo, Component } from 'react';
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "../../data/topo.json";
// import { Link } from"react-router-dom";
import Country from '../Country/'
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Map extends Component { 

    constructor(props){
        super(props);

        this.state = {
            country: "",
            dish: "",
            description: "",
            photo: "",
            selected: false
        }

        // this.handleClick = this.handleClick.bind(this);
    }

    handleEnter(country, dish, description, photo){
        this.setState({
            country: country,
            dish: dish,
            description: description,
            photo: photo
        })
    }
    
    // handleClick(){
    //     this.props.handleClick({...this.state});
    // }
    
    render(){ 
    
        const { country, dish, description, photo } = this.state;

        return(
            <>
                { !this.state.selected ?
                    <div className="container">
                        <ComposableMap width="1200" data-tip="" projectionConfig={{ scale: 200 }}>
                            <ZoomableGroup>
                                <Geographies geography={geoUrl}>
                                    {({ geographies }) =>
                                        geographies.map(geo =>
                                            // <Link to={ `/${geo.properties.NAME}` }> 
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
                                                        // this.handleClick
                                                        this.setState({
                                                            selected: true
                                                        });
                                                        this.props.setTooltipContent("");
                                                    }} 
                                                />
                                            // </Link>
                                        )
                                    }
                                </Geographies>
                            </ZoomableGroup>
                        </ComposableMap>
                    </div>
                : 
                <Country country={ country } dish={ dish } description={ description } photo={ photo } /> }
            </>
        );
    }
}

export default memo(Map);
