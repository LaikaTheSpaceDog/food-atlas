import axios from "../../axios";
import { logReg } from "./state";

export const login = (email, password) => {
    return (dispatch) => {
        axios.post("/login", {
            email: email,
            password: password,
            password_confirmation: password
        }).then(({ data }) => {
            dispatch(logReg(data));
        })
    }
}

export const reg = (name, email, password) => {
    return (dispatch) => {
        axios.post("/register", {
            name: name,
            email: email,
            password: password,
            password_confirmation: password
        }).then(({ data }) => {
            dispatch(logReg(data));
        })
    }
}