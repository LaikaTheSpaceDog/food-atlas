import axios from "axios";
import store from "./store";

export default axios.create({
    baseURL: "https://food-atlas.laikathespacedog.co.uk/api",
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${store.getState().token}`, // depends on user
    },
});