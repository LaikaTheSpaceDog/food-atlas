import React, { Component } from 'react';
import geoUrl from "../data/topo.json";

class List extends Component {

    render(){

        const countries = geoUrl.objects.ne_50m_admin_0_countries.geometries;
        const { handleEnter } = this.props;

        return (
            <aside className="list">
                <a className="close" href="#home">&times;</a>
                <ul className="countryList">
                    { countries.sort((a, b) => (a.properties.NAME > b.properties.NAME) ? 1 : -1).map(geo =>
                        geo.properties.COUNTRY ?
                        <li className="listItem" key={ `${geo.properties.ISO_A3}${geo.properties.name}` }><a href="#country" onClick={() => {
                            const { NAME, DISH, DESCRIPTION, PHOTO, RECIPE } = geo.properties;
                            handleEnter(NAME, DISH, DESCRIPTION, PHOTO, RECIPE);
                        }}>{ geo.properties.NAME }</a></li>
                        : null
                    )}
                </ul>
            </aside>
        );
    }
}

export default List;