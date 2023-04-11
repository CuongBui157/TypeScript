import { Outlet } from "react-router-dom";

import Header from "./header";
import Slider from "./slider";
import Footer from "./footer";
import Menu from "./menu";

export const HomeLayout = () => {
    return <>
        <Header />
        <Slider />
        <Outlet />
        <Footer/>
    </>
}
export const DetailLayout = () => {
    return <>
        <Header />
        <Menu />
        <Outlet />
        <Footer />
    </>
}
