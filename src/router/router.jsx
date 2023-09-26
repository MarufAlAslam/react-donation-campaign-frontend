import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/main";
import Home from "../pages/home";
import DonationDetails from "../pages/donation-details";
import Donations from "../pages/donations";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: () => fetch('data.json')
            },
            {
                path: "/donation",
                element: <Donations/>
            },
            {
                path: "/:id",
                element: <DonationDetails/>
            },
            {
                path: "/statistics",
                element: <div>Statistics</div>
            }
        ]
    }
])

export default router