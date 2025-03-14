import React from "react";
import { useAuthContext } from "../../context/AuthContextProvider";

const Home = () => {
    const { state } = useAuthContext();
    console.log(state);
    
    return (
    <div>
    <h1>Home</h1>
    </div>    
           );
};

export default Home;