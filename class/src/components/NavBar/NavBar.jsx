import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import routes from "../../constants/routes";

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



// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import routes from "../../constants/routes";

// const AppRoutes = Object.entries(routes);
// console.log(AppRoutes);

// const NavBar = () => {
//     const navigate = useNavigate();
//     return (
//         <nav>
//             <Link to={routes.home}>Home</Link>
//         </nav>
//     );
// };

// export default NavBar;