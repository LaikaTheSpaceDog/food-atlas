import { connect } from "react-redux";
import Country from "./Country";
import { like } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchLike: (country) => {
        dispatch(like(country))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Country);