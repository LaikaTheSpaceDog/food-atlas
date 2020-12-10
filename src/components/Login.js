import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

class Login extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            register: true,
            login: false
        }

        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.escFunction = this.escFunction.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
        if (this.props.login && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.history.push('/food-atlas/#home');
            this.props.handleLogin();
        }
    }

    escFunction(event){
        if(this.props.login && event.keyCode === 27) {
            this.props.history.push("/food-atlas/#home");
            this.props.handleLogin();
        }
    }

    handleClick(){
        let currentReg = this.state.register;
        let currentLog = this.state.login;
        this.setState({
            register: !currentReg,
            login: !currentLog
        })
    }

    render(){

        const { register, login } = this.state;

        return (
            <CSSTransition
                classNames="transition"
                transitionappeartimeout={500}
                timeout={500}
                in={ this.props.login }
                unmountOnExit
                appear
            >   
                <div className="overlay" id="login">
                    <div className="wrapper" ref={this.setWrapperRef}>
                        <aside className="logReg">
                            <ul className="tabGroup">
                                <li className={`tab${register ? " active" : ""}`} onClick={this.handleClick}>Register</li>
                                <li className={`tab${login ? " active" : ""}`} onClick={this.handleClick}>Login</li>
                            </ul>
                            {register ?
                                <form className="form" id="register" /* action="https://food-atlas.laikathespacedog.co.uk/api/register" method="post"*/>
                                    <label className="label">Full Name</label>
                                    <input className="input" type="text" required/>

                                    <label className="label">Email</label>
                                    <input className="input" type="email" required/>

                                    <label className="label">Password</label>
                                    <input className="input" type="password" required/>

                                    <label className="label">Password Confirmation</label>
                                    <input className="input" type="password" required/>

                                    <button className="formButton" type="submit">Register</button>
                                </form>
                            :
                                <form className="form" id="login" /* action="https://food-atlas.laikathespacedog.co.uk/api/login" method="post"*/>
                                    <label className="label">Email</label>
                                    <input className="input" type="email" required/>

                                    <label className="label">Password</label>
                                    <input className="input" type="password" required/>

                                    <button className="formButton" type="submit">Login</button>
                                </form>
                        }
                        </aside>
                    </div>
                </div>
            </CSSTransition>
        );
    }
}

export default withRouter(Login);