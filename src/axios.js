import axios from "axios";

export default axios.create({
    baseURL: "https://food-atlas.laikathespacedog.co.uk/api",
    headers: {
        Accept: "application/json"
    },
});