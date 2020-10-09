export const click = ({ country }) => {
    return {
        type: "CLICK",
        country: country
    };
};

export const back = () => {
    return {
        type: "BACK"
    };
};
