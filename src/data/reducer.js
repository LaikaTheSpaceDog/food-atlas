const loggedIn = (state, { token }) => ({
    ...state,
    token: token
});

const registered = (state, { token }) => ({
    ...state,
    token: token
});

const reducer = (state, action) => {
    switch (action.type) {
        case "login": return loggedIn(state, action);
        case "register": return registered(state, action);
        default: return state;
    }
}

export default reducer;