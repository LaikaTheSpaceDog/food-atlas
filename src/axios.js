import axios from "axios";

export default axios.create({
    baseURL: "http://food-atlas.laikathespacedog.co.uk/api",
    headers: {
        Accept: "application/json",
        Authorization: "", // depends on user
    },
});