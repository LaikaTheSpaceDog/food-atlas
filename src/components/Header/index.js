import { connect } from "react-redux";
import Header from "./Header";
import { logout,favourites } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchLogout: (token) => {
        dispatch(logout(token))
    },
    dispatchFavourites: () => dispatch(favourites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);