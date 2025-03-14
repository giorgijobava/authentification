import React, { useState } from "react";
import { authHandler } from "../../api/auth";
import authAction from "../../api/authAction";
import {useNavigate} from "react-router-dom"
import routes from "../../constants/routes";

const SignUpForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true)
        authHandler(authAction.singUp, user)
        .then(()=> navigate(routes.singIn, { state: { success: true }}))
        .catch((err)=> console.log(err))
        .finally(()=> setIsLoading(false));
    };
    return ( 
    <form onSubmit={submitHandler}>
        <label>User Name</label>
        <input
         placeholder="User Name"
         name="userName"
         onChange={(e) => 
            setUser((prev)=> ({
                ...prev,
                [e.target.name]: e.target.value,
            }))
        }
         />
        <label>Email</label>
        <input
         placeholder="Email"
         name="email"
         onChange={(e) => 
            setUser((prev)=> ({
                ...prev,
                [e.target.name]: e.target.value,
            }))
        }
         />
         <label>Password</label>
         <input
          placeholder="Password"
          name="password"
          onChange={(e) => 
             setUser((prev)=> ({
                 ...prev,
                 [e.target.name]: e.target.value,
            }))
         }
          />
          <button type="submit">Sing Up</button>
          {isLoading && <h1>Loading ...</h1>}
    </form>
    );
};

export default SignUpForm;
