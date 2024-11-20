import { Link, NavLink } from "react-router-dom";
import userIcon from "../../assets/profile-picture.png"
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOutUser } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/myprofile">My-Profile</NavLink></li>
    </>

    return (
        <div className="bg-base-100">
            <div className="navbar p-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            role="button"
                            className="btn btn-ghost text-xl lg:hidden">
                            <FaBars />
                        </div>
                    </div>
                    <a className="text-2xl sm:text-4xl font-bold">Eco<span className="text-[#f9a51a]">Travelers</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4 text-lg">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-3">

                    {
                        user && user.photoURL ? (
                            <div className="relative group">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar border mt-1">
                                    <img src={user.photoURL} alt="User Icon" className="rounded-full" />
                                </label>
                                <span
                                    className="absolute top-14 right-0 bg-white text-black px-3 py-1 rounded shadow-md text-sm hidden group-hover:block whitespace-nowrap z-10">
                                    {user.displayName}
                                </span>
                            </div>
                        ) : (
                            <div className="relative group">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar border mt-1">
                                    <img src={userIcon} alt="User Icon" className="rounded-full" />
                                </label>
                                {
                                    user && <span
                                        className="absolute top-14 right-0 bg-white text-black px-3 py-1 rounded shadow-md text-sm hidden group-hover:block whitespace-nowrap z-10">
                                        {user.displayName}
                                    </span>
                                }
                            </div>
                        )
                    }

                    {user ? <button
                        onClick={logOutUser}
                        className="btn bg-[#f9a31a] hover:text-white hover:bg-[#2B3440] font-semibold text-base px-5">
                        Log Out
                    </button> : <Link
                        to="/login"
                        className="btn bg-[#f9a31a] hover:text-white hover:bg-[#2B3440] font-semibold text-base px-5">
                        Login
                    </Link>}

                </div>
            </div>

            {/* Mobile Menu for Small Screens */}
            <div
                className={`lg:hidden bg-base-200 w-full shadow-md transition duration-500 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
            >
                <ul className="menu flex flex-col items-center gap-4 py-4">{navLinks}</ul>
            </div>

        </div>
    );
};

export default Navbar;