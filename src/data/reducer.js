const loggedIn = (state, { token }) => ({
    ...state,
    token: token,
    loggedIn: true
});

const registered = (state, { token }) => ({
    ...state,
    token: token,
    loggedIn: true
});

const reducer = (state, action) => {
    switch (action.type) {
        case "login": return loggedIn(state, action);
        case "register": return registered(state, action);
        default: return state;
    }
}

export default reducer;