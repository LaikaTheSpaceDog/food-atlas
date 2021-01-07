import { connect } from "react-redux";
import Favourites from "./Favourites";

const mapStateToProps = state => {
    return {
        favouriteCountries: state.favourites,
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(Favourites);