import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";


const MainLayout = () => {
    return (
        <div className="font-montserrat">
            <Navbar></Navbar>
            <DynamicTitle></DynamicTitle>
            <div  className="min-h-[50vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;