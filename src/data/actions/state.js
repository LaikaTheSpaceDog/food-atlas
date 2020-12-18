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