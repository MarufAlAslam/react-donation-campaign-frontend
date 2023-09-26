import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/main";
import Home from "../pages/home";
import DonationDetails from "../pages/donation-details";

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
                element: <div>Donation</div>
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