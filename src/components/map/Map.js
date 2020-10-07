import React, { memo } from 'react';
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "../../data/topo.json";

const rounded = num => {
    if (num > 1000000000) {
      return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
      return Math.round(num / 100000) / 10 + "M";
    } else {
      return Math.round(num / 100) / 10 + "K";
    }
};

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
                                    const { NAME, POP_EST } = geo.properties;
                                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                                }}
                                onMouseLeave={() => {
                                    setTooltipContent("");
                                }}
                                fill="#44BBA4"
                                stroke="#F6F7EB"
                                style={{
                                    hover: {
                                    fill: "#E94F37"
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
