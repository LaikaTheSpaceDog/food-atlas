import React, { memo } from 'react';
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "../../data/topo.json";

const Map = ({ setTooltipContent }) => (
    <div>
        <ComposableMap width="1200" data-tip="" projectionConfig={{ scale: 200 }}>
            <ZoomableGroup>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => 
                            <Geography 
                                key={geo.rsmKey} 
                                geography={geo}
                                onMouseEnter={() => {
                                    const { NAME } = geo.properties;
                                    setTooltipContent(`${NAME}`);
                                }}
                                onMouseLeave={() => {
                                    setTooltipContent("");
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
                            />
                        )
                    }
                </Geographies>
            </ZoomableGroup>
        </ComposableMap>
    </div>
);

export default memo(Map);
