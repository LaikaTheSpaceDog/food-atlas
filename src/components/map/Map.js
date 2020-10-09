import React, { memo, Component } from 'react';
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "../../data/topo.json";
import { Link } from"react-router-dom";

class Map extends Component { 

    constructor(props){
        super(props);

        this.state = {
            country: "",
            dish: "",
            description: "",
            photo: ""
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleEnter(country, dish, description, photo){
        this.setState({
            country: country,
            dish: dish,
            description: description,
            photo: photo
        })
    }
    
    handleClick(){
        this.props.handleClick({...this.state});
    }
    
    render(){ 
    
        return(
            <div className="container">
                <ComposableMap width="1200" data-tip="" projectionConfig={{ scale: 200 }}>
                    <ZoomableGroup>
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map(geo =>
                                    <Link to={ `/${geo.properties.NAME}` }> 
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
                                            stroke="#F6F7EB"
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
                                            onClick={ this.handleClick } 
                                        />
                                    </Link>
                                )
                            }
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        );
    }
}

export default memo(Map);
