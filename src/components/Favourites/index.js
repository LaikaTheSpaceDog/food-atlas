import { connect } from "react-redux";
import Favourites from "./Favourites";
import { favourites } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        favouriteCountries: state.favourites,
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchFavourites: () => dispatch(favourites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);