import React from "react";
import { useAuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";

const AuthGuard = ({children}) => {
    const navigate = useNavigate();
    const {state} = useAuthContext();
    return (
    <>
    {state.isAuthenticated ? (
        children
    ) : (
        <div>
            <h1>You are not Authenticated</h1>
            <h4>Please Sign In or Sign Up</h4>
            <button onClick={()=> navigate(routes.singIn)}>
                Sign In
                </button>
            <button onClick={()=> navigate(routes.singUp)}>
                Sign Up
                </button>
        </div>
    )}
    </>
    );
};

export default AuthGuard;