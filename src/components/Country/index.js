import { connect } from "react-redux";
import Country from "./Country";
import { like, favourites } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        favourites: state.favourites
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchLike: (country) => {
        dispatch(like(country))
    },
    dispatchFavourites: () => dispatch(favourites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Country);