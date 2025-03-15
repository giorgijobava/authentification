import routes from "../constants/routes";
import AuthGuard from "../Guards/AuthGuard";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import SingIn from "../pages/SignIn/SingIn";
import SingUp from "../pages/SignUp/SingUp";
import MovieDetail from "../pages/MovieDetail/movie";

const appRoutes = [
    { path: routes.home, Component: Home, Guard: AuthGuard },
    { path: routes.products, Component: Products,  Guard: AuthGuard },
    { path: routes.singIn, Component: SingIn},
    { path: routes.singUp, Component: SingUp },
    { path: routes.movieDetail, Component: MovieDetail } 
];

export default appRoutes;
