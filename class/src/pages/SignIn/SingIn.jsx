import React from "react";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContextProvider";

const SingIn = () => {
    const {state} = useAuthContext();
    const location = useLocation();
    console.log(state);
    
    return (
     <div>
        <h1>Sing In</h1>
        {location.state?.success && <h1>Congratulation</h1>}
    </div>
    );
};

export default SingIn;




