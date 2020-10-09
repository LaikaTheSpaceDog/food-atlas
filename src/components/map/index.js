import { connect } from "react-redux";
import Map from "./Map";
import { click } from "../../data/actions";

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: (data) => dispatch(click(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Map);