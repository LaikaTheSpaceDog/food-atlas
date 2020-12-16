const loggedIn = (state) => ({
    ...state,
    loggedIn: true
});

const reducer = (state, action) => {
    switch (action.type) {
        case "logReg": return loggedIn(state);
        default: return state;
    }
}

export default reducer;