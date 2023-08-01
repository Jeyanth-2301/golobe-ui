import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from '../components/Footer/Footer'

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
};

export default Layout;