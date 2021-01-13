import { connect } from "react-redux";
import Login from "./Login";
import { login, reg, logout } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchLog: (email, password) => {
        dispatch(login(email, password))
    },
    dispatchReg: (name, email, password) => {
        dispatch(reg(name, email, password))
    },
    dispatchLogout: (token) => {
        dispatch(logout(token))
    }
});

export default connect(mapStateToProps, mapDispatchToProps )(Login);