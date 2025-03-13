import React, { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const authContext = createContext();

const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <authContext.Provider value={{ state,dispatch }}>
            {children}
        </authContext.Provider>
    );
};

const useAuthContext = () => {
    const AuthContext = useContext(authContext);
    if (!AuthContext) {
        throw new Error("auth context is not working")
    }
    return AuthContext;
}

export { AuthContextProvider, useAuthContext };