import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

class About extends Component {

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
        if (this.props.about && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.history.push('/food-atlas/#home');
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
                            <Link className="close" to="#home" onClick={handleAbout}>&times;</Link>
                            <div className="aboutText">
                                <p className="asideText centre">Welcome to the Food Atlas!</p>
                                <p className="asideText">Travel around the world in 197(ish) dishes by simply clicking on a country to find out about one of its signature national dishes.</p>
                                <p className="asideText">Some small nations may be hard to locate on the map due to its resolution, so please find them on the <a className="link" href="#list">list</a> instead if you are struggling!</p>
                            </div>
                        </aside>
                    </div>
                </div>
            </CSSTransition>
        );
    }
}

export default withRouter(About);