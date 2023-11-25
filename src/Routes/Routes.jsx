import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DisplayFeaturedDetail from "../Pages/DisplayFeaturedDetail/DispalyFeaturedDetail";

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
                path: '/featuredDetail/:id',
                element: <DisplayFeaturedDetail></DisplayFeaturedDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/featured/${params.id}`)
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