import { createContext, useReducer } from "react";
import AuthReducer from "./authReducer";
const INITIAL_STATE = {
    user: {
        _id: "6628d48cae363ba81e8036ef",
		firstName: "Osama",
		lastName: "Hafeez",
		userName: "osamahafeez",
		email: "osama@gmail.com",
		gender: "Male",
		profilePic: "",
    },
    // user:null,
    isFetching: false,
    error: false,
}

export const AuthContext = createContext(INITIAL_STATE)


export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}