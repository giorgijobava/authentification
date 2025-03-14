import React from "react";
import { useLocation } from "react-router-dom";
import SignInForm from "../../components/SignInForm/SignInForm";

const SingIn = () => {
    const location = useLocation();    
    return (
     <div>
        <h1>Sing In</h1>
        {location.state?.success && <h1>Congratulation</h1>}
        <SignInForm />
    </div>
    );
};

export default SingIn;