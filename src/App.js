import React from 'react';
import Home from './components/Home/Home';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import "./styles/css/styles.min.css";

import geoUrl from "./data/topo.json";

const App = () => (
  <>
    <Home />
    <div>
      <ComposableMap width="1000">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
          }
        </Geographies>
      </ComposableMap>
    </div>
  </>
);

export default App;
