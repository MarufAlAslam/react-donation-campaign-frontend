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
                element: <Home/>,
                loader: () => fetch('./data.json')
            },
            {
                path: "/donation",
                element: <div>Donation</div>
            },
            {
                path: "/statistics",
                element: <div>Statistics</div>
            }
        ]
    }
])

export default router