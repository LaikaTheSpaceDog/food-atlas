import React from 'react';
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "../data/topo.json";

const Map = ({setTooltipContent, handleEnter}) => {

    const mapWidth = 1200;
    const mapHeight = 600;
    
    return (
        <div className="container">
            <ComposableMap className="map" width={mapWidth} style={{ width: "100%" }} data-tip="" projectionConfig={{ scale: 200 }} >
                <ZoomableGroup translateExtent={[[0, -mapHeight],[mapWidth, mapHeight]]}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo =>
                                <Geography 
                                    className="geography"
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
                                        }
                                    }}
                                />
                            )
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
}

export default Map;