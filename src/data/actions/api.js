import axios from "../../axios";
import { logReg, loggedOut } from "./state";
import store from "../../store";

axios.interceptors.request.use(function (config) {
    const token = store.getState().token;
    config.headers.Authorization =  `Bearer ${token}`;

    return config;
});


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

export const logout = (token) => {
    return (dispatch) => {
        axios.post("/logout", {
            token: token,
        }).then(({ data }) => {
            dispatch(loggedOut(data));
        })
    }
}