import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchLogout: (token) => {
        dispatch(logout(token))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);