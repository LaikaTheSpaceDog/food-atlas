import { connect } from "react-redux";
import Header from "./Header";
import { favourites } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchFavourites: () => dispatch(favourites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);