import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

class About extends Component {

    constructor(props, context) {
        super(props, context);

        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.escFunction = this.escFunction.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener("keydown", this.escFunction, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener("keydown", this.escFunction, false);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
      }
    
    handleClickOutside(event) {
        if (this.props.about && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.history.push('/food-atlas/#home');
            this.props.handleAbout();
        }
    }

    escFunction(event){
        if(this.props.about && event.keyCode === 27) {
            this.props.history.push("/food-atlas/#home");
            this.props.handleAbout();
        }
    }

    render(){
        const {handleAbout, about} = this.props;

        return (
            <CSSTransition
                classNames="transition"
                transitionappeartimeout={500}
                timeout={500}
                in={ about }
                unmountOnExit
                appear
            >   
                <div className="overlay" id="about">
                    <div className="wrapper" ref={this.setWrapperRef}>
                        <aside className="about">
                            <Link to="#home" onClick={handleAbout}><span className="closeButton"></span></Link>
                            <div className="aboutText">
                                <p className="asideHeading">Welcome!</p>
                                <p className="asideText">Explore the world of food by simply clicking on a country to find out about one of its signature national dishes.</p>
                                <p className="asideText">Some small nations may be hard to locate on the map, so please find them on the <a className="link" href="#list">list</a> instead if you are struggling!</p>
                            </div>
                        </aside>
                    </div>
                </div>
            </CSSTransition>
        );
    }
}

export default withRouter(About);