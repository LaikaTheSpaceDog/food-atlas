import React from 'react';
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "../data/topo.json";
import { Link } from 'react-router-dom';

const Map = ({setTooltipContent, handleEnter}) => {

    return (
        <div className="container">
            <ComposableMap width={1200} style={{ width: "100%" }} data-tip="" projectionConfig={{ scale: 200 }} >
                <ZoomableGroup>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo =>
                                <Link to="/food-atlas/#country" key={ geo.properties.NAME }>
                                    <Geography 
                                        key={geo.rsmKey} 
                                        geography={geo}
                                        onMouseOver={() => {
                                            const { NAME } = geo.properties;
                                            setTooltipContent(`${NAME}`);
                                        }}
                                        onMouseOut={() => {
                                            setTooltipContent("");
                                        }}
                                        onClick={() => {
                                            const { NAME, DISH, DESCRIPTION, PHOTO, RECIPE } = geo.properties;
                                            handleEnter(NAME, DISH, DESCRIPTION, PHOTO, RECIPE);
                                            setTooltipContent("");
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
                                </Link>
                            )
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
}

export default Map;