const removeLayer = (arr) => {
    let newArr = arr.data.map(country => country);
    return newArr;
}

const loggedIn = (state, { token }) => ({
    ...state,
    loggedIn: true,
    token: token
});

const loggedOut = (state) => ({
    ...state,
    loggedIn: false,
    token: "",
    favourites: []
});

const liked = (state) => ({
    ...state
})

const faves = (state, {data}) => ({
    ...state,
    favourites: removeLayer(data)
})

const reducer = (state, action) => {
    switch (action.type) {
        case "logReg": return loggedIn(state, action);
        case "loggedOut": return loggedOut(state);
        case "liked": return liked(state);
        case "favourites": return faves(state, action);
        default: return state;
    }
}

export default reducer;