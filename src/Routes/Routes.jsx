import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

const Routes = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>
    }
])

export default Routes;