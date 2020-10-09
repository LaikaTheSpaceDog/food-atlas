export const click = ({ country, dish, description, photo }) => {
    return {
        type: "CLICK",
        country: country,
        dish: dish,
        description: description,
        photo: photo
    };
};

export const back = () => {
    return {
        type: "BACK"
    };
};
