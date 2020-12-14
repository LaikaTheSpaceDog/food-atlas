import axios from "../../axios";
import { loggedIn, registered } from "./state";

export const login = (email, password) => {
    return (dispatch) => {
        axios.post("/login", {
            email: email,
            password: password,
            password_confirmation: password
        }).then(({ data }) => {
            dispatch(loggedIn(data));
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
            dispatch(registered(data));
        })
    }
}