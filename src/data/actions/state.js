export const loggedIn = ({token}) => {
    return {
        type: "login",
        token
    }
}

export const registered = ({token}) => {
    return {
        type: "register",
        token
    }
}