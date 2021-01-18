import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

class About extends Component {

    constructor(props, context) {
        super(props, context);

        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.escFunction = this.escFunction.bind(this);
        this.listLink = this.listLink.bind(this);
        this.loginLink = this.loginLink.bind(this);
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
            this.props.handleAboutView();
        }
    }

    escFunction(event){
        if(this.props.about && event.keyCode === 27) {
            this.props.handleAboutView();
        }
    }

    listLink(){
        this.props.handleAboutView();
        this.props.handleListView();
    }

    loginLink(){
        this.props.handleAboutView();
        this.props.handleLoginView();
    }

    render(){
        const {handleAboutView, about} = this.props;

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
                            <span className="closeButton" onClick={handleAboutView}></span>
                            <div className="aboutText">
                                <p className="asideHeading">Welcome!</p>
                                <p className="asideText">Explore the world of food by simply clicking on a country to find out about one of its signature national dishes.</p>
                                <p className="asideText"><span className="link" onClick={this.loginLink}>Create an account</span> to make your own personalised list of dishes!</p>
                                <p className="asideText">Some small nations may be hard to locate on the map, so please find them on the <span className="link" onClick={this.listLink}>list</span> instead if you are struggling.</p>
                            </div>
                        </aside>
                    </div>
                </div>
            </CSSTransition>
        );
    }
}

export default withRouter(About);