import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import authAction from "../../api/authAction";
import { authHandler } from "../../api/auth";
import { LogInAction } from "../../context/actionCreators";
import { useAuthContext } from "../../context/AuthContextProvider";
import routes from "../../constants/routes";

const SignInForm = () => {
    const navigate = useNavigate();
    const { dispatch} = useAuthContext();
    const [userInfo, setUserInfo ] = useState({
        userName: "",
        password: "",
        error: "",
    });
    const [isLoading, setIsLoading] = useState(true);
    const submitHandler = (e) => {
        e.preventDefault();
        authHandler(authAction.singIn, userInfo)
        .then ((data)=> {
        dispatch(LogInAction(data));
         navigate(routes.home);
        })
        .catch((err)=> console.log(err))
        .finally(()=> setIsLoading(false))
    };
    return (
    <form onSubmit={submitHandler}>
        <label>User Name</label>
        <input
        placeholder="User Name"
        name="userName"
        onChange={(e)=> 
            setUserInfo((prev)=> 
                ({...prev,
                 [e.target.name]: e.target.value,
                }))
            } 
        />
        <label>Password</label>
        <input
        placeholder="Password"
        name="password"
        onChange={(e)=> 
            setUserInfo((prev)=> 
                ({...prev,
                 [e.target.name]: e.target.value,
                }))
            } 
        /> 
        <button type="submit">Submit</button>
        {isLoading && <h2>Loading...</h2>} 
    </form>
    );
};

export default SignInForm;