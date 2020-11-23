import React, { Component } from 'react';
import geoUrl from "../data/topo.json";
import { withRouter, Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

class List extends Component {
    
    constructor(props, context) {
        super(props, context);

        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
      }
    
    handleClickOutside(event) {
        if (this.props.list && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.history.push("/food-atlas/#home");
            this.props.handleList();
        }
    }

    render(){

        const countries = geoUrl.objects.ne_50m_admin_0_countries.geometries;
        const { handleEnter, handleList, list } = this.props;

        return (
            <CSSTransition
                classNames="transition"
                transitionappeartimeout={500}
                timeout={5000}
                in={ list }
                unmountOnExit
                appear
            >   
                <div className="overlay" id="list">      
                    <div className="wrapper" ref={this.setWrapperRef}>
                        <aside className="list">
                            <Link className="close" href="#home" onClick={handleList}>&times;</Link>
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
                    </div>
                </div>
            </CSSTransition>
        );
    }
}

export default withRouter(List);