import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

class Login extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            reg: true,
            register: {
                name: "",
                email: "",
                pass: "",
                conf: ""
            },
            log: false,
            login: {
                email: "",
                pass: ""
            }
        }

        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.escFunction = this.escFunction.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleRegName = this.handleRegName.bind(this);
        this.handleRegEmail = this.handleRegEmail.bind(this);
        this.handleRegPass = this.handleRegPass.bind(this);
        this.handleRegConf = this.handleRegConf.bind(this);
        this.handleLogEmail = this.handleLogEmail.bind(this);
        this.handleLogPass = this.handleLogPass.bind(this);
        this.handleLoginApi = this.handleLoginApi.bind(this);
        this.handleRegisterApi = this.handleRegisterApi.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
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
            this.props.handleLoginView();
        }
    }

    escFunction(event){
        if(this.props.login && event.keyCode === 27) {
            this.props.history.push("/food-atlas/#home");
            this.props.handleLoginView();
        }
    }

    handleClick(){
        let currentReg = this.state.reg;
        let currentLog = this.state.log;
        this.setState({
            reg: !currentReg,
            log: !currentLog
        })
    }

    handleRegName(e){
        let registerCopy = JSON.parse(JSON.stringify(this.state.register));
        registerCopy.name = e.currentTarget.value;
        this.setState({ 
            register: registerCopy
        });
    }

    handleRegEmail(e){
        let registerCopy = JSON.parse(JSON.stringify(this.state.register));
        registerCopy.email = e.currentTarget.value;
        this.setState({ 
            register: registerCopy
        });
    }

    handleRegPass(e){
        let registerCopy = JSON.parse(JSON.stringify(this.state.register));
        registerCopy.pass = e.currentTarget.value;
        this.setState({ 
            register: registerCopy
        });
    }

    handleRegConf(e){
        let registerCopy = JSON.parse(JSON.stringify(this.state.register));
        registerCopy.conf = e.currentTarget.value;
        this.setState({ 
            register: registerCopy
        });
    }

    handleLogEmail(e){
        let loginCopy = JSON.parse(JSON.stringify(this.state.login));
        loginCopy.email = e.currentTarget.value;
        this.setState({ 
            login: loginCopy
        });
    }

    handleLogPass(e){
        let loginCopy = JSON.parse(JSON.stringify(this.state.login));
        loginCopy.pass = e.currentTarget.value;
        this.setState({ 
            login: loginCopy
        });
    }

    handleRegisterApi(e){
        e.preventDefault();
        let {name, email, pass, conf} = this.state.register;
        if( pass === conf ){
            this.props.dispatchReg(name, email, pass)
            this.props.handleLogin();
        } else { 
           return "Passwords must match" 
        }
    }
    
    handleLoginApi(e){
        e.preventDefault();
        let {email, pass} = this.state.login;
        this.props.dispatchLog(email, pass);
        this.props.handleLoginView();
    }

    handleLogout(){
        this.props.dispatchLogout(this.props.token);
    }

    render(){

        const { reg, log } = this.state;
        const { loggedIn, handleLoginView } = this.props;

        return (
            <>
                { loggedIn ? 
                    <aside className="loggedIn">
                        <a className="loginLink" href="#logout" onClick={ this.handleLogout }>Log Out</a>
                    </aside>
                :
                    <aside className="loggedIn">
                        <a className="loginLink" href="#login" onClick={ handleLoginView }>Register/Log In</a>         
                    </aside>
                }
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
                                    <li className={`tab${reg ? " active" : ""}`} onClick={this.handleClick}>Register</li>
                                    <li className={`tab${log ? " active" : ""}`} onClick={this.handleClick}>Login</li>
                                </ul>
                                {reg ?
                                    <form className="form" id="register" onSubmit={ this.handleRegisterApi }>
                                        <label className="label">Full Name</label>
                                        <input className="input" type="text" onChange={ this.handleRegName } value={ this.state.register.name } required/>

                                        <label className="label">Email</label>
                                        <input className="input" type="email" onChange={ this.handleRegEmail } value={ this.state.register.email } required/>

                                        <label className="label">Password</label>
                                        <input className="input" type="password" onChange={ this.handleRegPass } value={ this.state.register.pass } required/>

                                        <label className="label">Password Confirmation</label>
                                        <input className="input" type="password" onChange={ this.handleRegConf } value={ this.state.register.conf } required/>

                                        <button className="formButton" type="submit">Register</button>
                                    </form>
                                :
                                    <form className="form" id="login" onSubmit={ this.handleLoginApi }>
                                        <label className="label">Email</label>
                                        <input className="input" type="email" onChange={ this.handleLogEmail } value={ this.state.login.email } required/>

                                        <label className="label">Password</label>
                                        <input className="input" type="password" onChange={ this.handleLogPass } value={ this.state.login.pass } required/>

                                        <button className="formButton" type="submit">Login</button>
                                    </form>
                                }
                            </aside>
                        </div>
                    </div>
                </CSSTransition>
            </>
        );
    }
}

export default withRouter(Login);