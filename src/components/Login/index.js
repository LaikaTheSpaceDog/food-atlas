import { connect } from "react-redux";
import Login from "./Login";
import { login, reg } from "../../data/actions/api";

const mapDispatchToProps = dispatch => {
    return {
        handleLog: (email, password) => dispatch(login(email, password)),
        handleReg: (name, email, password) => dispatch(reg(name, email, password))
    }
}

export default connect(null, mapDispatchToProps )(Login);