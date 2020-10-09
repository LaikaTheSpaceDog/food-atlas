import { connect } from "react-redux";
import Map from "./Map";
import { click } from "../../data/actions";

const mapDispatchToProps = dispatch => {
    return {
        handleClick: (data) => dispatch(click(data)),
    }
}

export default connect(null, mapDispatchToProps )(Map);