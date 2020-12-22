import { connect } from "react-redux";
import Country from "./Country";

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
    }
}

export default connect(mapStateToProps)(Country);