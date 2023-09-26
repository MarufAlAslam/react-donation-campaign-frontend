import { Outlet } from "react-router-dom"
import Hero from "../components/hero"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    return (
        <div>
            <Hero/>
            <Outlet/>
            <ToastContainer />
        </div>
    )
}

export default Layout