// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import appRoutes from "./config/routes";

// const AppRoutes = () => {
//     return (
//          <Routes>
//             {appRoutes.map((route) => {
//                 return(
//                    <Route
//                        key={route.path}
//                        path={route.path}
//                        element={<route.Component />}
//                  />
//             );
//         })}
//     </Routes>
//     );
// };

import React from "react";
import { Routes, Route } from "react-router-dom";
import appRoutes from "./config/routes";

const AppRoutes = () => {
    return (
        <Routes>
            {appRoutes.map((route) => {
                 return(  
                    <Route
                    key={route.path}
                    path={route.path}
                    element={<route.Component />}
                    />
                );
            })}
        </Routes>
    );
};

export default AppRoutes;