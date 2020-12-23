const loggedIn = (state, { token }) => ({
    ...state,
    loggedIn: true,
    token: token
});

const loggedOut = (state) => ({
    ...state,
    loggedIn: false,
    token: ""
});

const liked = (state) => ({
    ...state
})

const reducer = (state, action) => {
    switch (action.type) {
        case "logReg": return loggedIn(state, action);
        case "loggedOut": return loggedOut(state);
        case "liked": return liked(state);
        default: return state;
    }
}

export default reducer;