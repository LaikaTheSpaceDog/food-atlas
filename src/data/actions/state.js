export const logReg = ({token}) => {
    return {
        type: "logReg",
        token: token
    }
}

export const loggedOut = () => {
    return {
        type: "loggedOut"
    }
}

export const liked = () => {
    return {
        type: "liked"
    }
}

export const favouriteCountries = (data) => {
    return {
        type: "favourites",
        data: data
    }
}