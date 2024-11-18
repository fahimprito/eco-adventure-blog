import { NavLink } from "react-router-dom";
import userIcon from "../../assets/profile-picture.png"
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">contact</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-xl lg:hidden">
                            <FaBars />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="text-2xl font-bold">Eco<span className="text-[#f9a51a]">Travelers</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4 text-lg">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="relative group">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar border">
                            <img src={userIcon} alt="User Icon" className="rounded-full" />
                        </label>
                        <span className="absolute top-12 right-0 bg-white text-black px-3 py-1 rounded shadow-md text-sm hidden group-hover:block whitespace-nowrap z-10">
                            fahim ahmmed
                        </span>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;