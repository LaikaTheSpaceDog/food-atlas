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

    handleRegisterApi(){
        let {name, email, pass, conf} = this.state.register;
        if( pass === conf ){
            return this.props.handleReg(name, email, pass)
        } else { 
           return "Passwords must match" 
        }
    }
    
    handleLoginApi(){
        let {email, pass} = this.state.login;
        return this.props.handleLog(email, pass);
    }

    render(){

        const { reg, log } = this.state;

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
                                <li className={`tab${reg ? " active" : ""}`} onClick={this.handleClick}>Register</li>
                                <li className={`tab${log ? " active" : ""}`} onClick={this.handleClick}>Login</li>
                            </ul>
                            {reg ?
                                <form className="form" id="register">
                                    <label className="label">Full Name</label>
                                    <input className="input" type="text" onChange={ this.handleRegName } value={ this.state.register.name } required/>

                                    <label className="label">Email</label>
                                    <input className="input" type="email" onChange={ this.handleRegEmail } value={ this.state.register.email } required/>

                                    <label className="label">Password</label>
                                    <input className="input" type="password" onChange={ this.handleRegPass } value={ this.state.register.pass } required/>

                                    <label className="label">Password Confirmation</label>
                                    <input className="input" type="password" onChange={ this.handleRegConf } value={ this.state.register.conf } required/>

                                    <button className="formButton" type="button" onClick={ this.handleRegisterApi }>Register</button>
                                </form>
                            :
                                <form className="form" id="login">
                                    <label className="label">Email</label>
                                    <input className="input" type="email" onChange={ this.handleLogEmail } value={ this.state.login.email } required/>

                                    <label className="label">Password</label>
                                    <input className="input" type="password" onChange={ this.handleLogPass } value={ this.state.login.pass } required/>

                                    <button className="formButton" type="button" onClick={ this.handleLoginApi }>Login</button>
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