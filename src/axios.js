import axios from "axios";
import delayAdapterEnhancer from 'axios-delay';

export default axios.create({
    baseURL: "https://food-atlas.laikathespacedog.co.uk/api",
    headers: {
        Accept: "application/json"
    },
    adapter: delayAdapterEnhancer(axios.defaults.adapter)
});