import initial from '../data/initial';

const click = (state, { country, dish, description, photo }) => ({
    ...state,
    id: 0,
    country: country,
    dish: dish,
    description: description,
    photo: photo
});

const reset = () => ({
    ...initial
});

const reducer = (state, action) => {
    switch (action.type) {
        case "CLICK": return click(state, action);
        case "BACK": return reset();
        default: return state;
    }
};

export default reducer;