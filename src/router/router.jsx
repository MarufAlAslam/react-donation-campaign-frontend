import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/main";
import Home from "../pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
])

export default router