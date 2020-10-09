import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => {
    return {
        country: state.country,
        dish: state.dish,
        description: state.description,
        photo: state.photo
    };
};

export default connect(mapStateToProps)(App);