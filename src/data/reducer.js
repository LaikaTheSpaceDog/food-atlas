const loggedIn = (state, { token }) => ({
    ...state,
    loggedIn: true,
    token: token
});

const loggedOut = (state) => ({
    ...state,
    loggedIn: false
})

const reducer = (state, action) => {
    switch (action.type) {
        case "logReg": return loggedIn(state, action);
        case "loggedOut": return loggedOut(state);
        default: return state;
    }
}

export default reducer;