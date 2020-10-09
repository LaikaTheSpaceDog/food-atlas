import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => {
    return {
        country: state.country,
        dish: state.dish,
        description: state.description
    };
};

export default connect(mapStateToProps)(App);