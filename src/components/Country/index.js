import { connect } from "react-redux";
import Country from "./Country";
import { back } from "../../data/actions";

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => dispatch(back()),
    }
}

export default connect(null, mapDispatchToProps )(Country);