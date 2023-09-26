import { Outlet } from "react-router-dom"
import Hero from "../components/hero"

const Layout = () => {
    return (
        <div>
            <Hero/>
            <Outlet/>
        </div>
    )
}

export default Layout