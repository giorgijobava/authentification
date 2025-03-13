import routes from "../constants/routes";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import SingIn from "../pages/SignIn/SingIn";
import SingUp from "../pages/SignUp/SingUp";

const appRoutes = [
    { path: routes.home, Component: Home},
    { path: routes.products, Component: Products },
    { path: routes.singIn, Component: SingIn},
    { path: routes.singUp, Component: SingUp },
];

export default appRoutes;
