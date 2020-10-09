const click = (state, { country }) => ({
    ...state,
    id: 0,
    country: country,
    dish: "",
    description: ""
});

const reducer = (state, action) => {
    switch (action.type) {
        case "CLICK": return click(state, action);
        default: return state;
    }
};

export default reducer;