import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DisplayFeaturedDetail from "../Pages/DisplayFeaturedDetail/DispalyFeaturedDetail";
import PrivateRoutes from "./PrivateRoutes";
import Products from "../Pages/Products/Products";
import DisplayTrendingDetails from "../Pages/DisplayTrendingDetails/DisplayTrendingDetails";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../Pages/Dashboard/payment/Payment";
import UpdateMyProducts from "../Pages/Dashboard/updateMyProducts/UpdateMyProducts";
import ProductQueue from "../Pages/Dashboard/ProductsQueue/ProductQueue";
import ReportedProducts from "../Pages/Dashboard/ReportedProducts/ReportedProducts";

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
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            // normal user dashboard
            {
                path: '/dashboard/myProfile',
                element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
            },
            {
                path: '/dashboard/addProducts',
                element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
            },
            {
                path: '/dashboard/myProducts',
                element: <PrivateRoutes><MyProducts></MyProducts></PrivateRoutes>
            },
            {
                path: '/dashboard/updateMyProduct/:id',
                element: <PrivateRoutes><UpdateMyProducts></UpdateMyProducts></PrivateRoutes>
            },
            {
                path: '/dashboard/payment',
                element: <PrivateRoutes><Payment></Payment></PrivateRoutes>
            },
            // Moderator
            {
                path: '/dashboard/productReviewQueue',
                element: <PrivateRoutes><ProductQueue></ProductQueue></PrivateRoutes>
            },
            {
                path: '/dashboard/reportedContents',
                element: <PrivateRoutes><ReportedProducts></ReportedProducts></PrivateRoutes>
            },
        ]
    },
])

export default Routes;