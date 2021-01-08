import axios from "../../axios";
import { logReg, loggedOut, liked, favouriteCountries } from "./state";
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
            axios.get("/me/countries",{
                headers: {
                    'Authorization': `Bearer ${data.token}`
                }
            }).then(({ data }) => {
                dispatch(favouriteCountries(data));
            })
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
            axios.get("/me/countries",{
                headers: {
                    'Authorization': `Bearer ${data.token}`
                }
            }).then(({ data }) => {
                dispatch(favouriteCountries(data));
            })
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

export const like = (country) => {
    return (dispatch) => {
        axios.post("/me/countries", {
            countries: [country]
        }).then(({ data }) => {
            dispatch(liked(data));
        })
    }
}

export const favourites = () => {
    return (dispatch) => {
        axios.get("/me/countries").then(({ data }) => {
            dispatch(favouriteCountries(data));
        });
    }
} 