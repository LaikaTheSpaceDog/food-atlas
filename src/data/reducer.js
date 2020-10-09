import initial from '../data/initial';

const click = (state, { country }) => ({
    ...state,
    id: 0,
    country: country,
    dish: "",
    description: ""
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