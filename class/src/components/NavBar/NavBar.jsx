import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import routes from "../../constants/routes";
import "./navbar.css"; 

const AppRoutes = Object.entries(routes);
const NavBar = () => {
    const navigate = useNavigate();
    return(
        <nav>
        {AppRoutes.map((Link)=>{
            const [key, value] = Link;
            return <NavLink key={key} to={value}>{key}</NavLink>
    })}
    </nav>
);
};

export default NavBar;

