import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DisplayFeaturedDetail from "../Pages/DisplayFeaturedDetail/DispalyFeaturedDetail";
import PrivateRoutes from "./PrivateRoutes";
import Products from "../Pages/Products/Products";
import DisplayTrendingDetails from "../Pages/DisplayTrendingDetails/DisplayTrendingDetails";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/featuredDetail/:id',
                element: <PrivateRoutes><DisplayFeaturedDetail></DisplayFeaturedDetail></PrivateRoutes>
            },
            {
                path: '/trendingDetail/:id',
                element: <PrivateRoutes><DisplayTrendingDetails></DisplayTrendingDetails></PrivateRoutes>
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    },
])

export default Routes;