import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className=" bg-black text-neutral-content py-20 px-10">
                <div className="container mx-auto footer lg:grid-cols-4">
                    <nav className="w-full">
                        <h6 className=" text-white text-4xl font-bold mb-3">
                            Eco<span className="text-[#f9a51a]">Travelers</span>
                        </h6>
                        <div>
                            <p className="w-2/3 mb-3">Explore responsibly, connect with nature, and embrace the beauty of the world. Follow us on social media and stay updated with our latest travel tips and stories.</p>
                        </div>
                        <div className="flex justify-center space-x-4 mb-3">
                            <a
                                href="#"
                                className="flex items-center justify-center w-10 h-10 rounded bg-gray-800 text-white hover:bg-pink-500 transition-colors text-xl"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center w-10 h-10 rounded bg-gray-800 text-white hover:bg-blue-600 transition-colors text-xl"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center w-10 h-10 rounded bg-gray-800 text-white hover:bg-gray-500 transition-colors text-xl"
                                aria-label="Twitter"
                            >
                                <FaSquareXTwitter />
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center w-10 h-10 rounded bg-gray-800 text-white hover:bg-red-600 transition-colors text-xl"
                                aria-label="Pinterest"
                            >
                                <FaPinterest />
                            </a>
                        </div>
                    </nav>
                    <nav className="w-full">
                        <h6 className="footer-title text-lg text-white font-bold  mb-3">Useful Links</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Destinations</a>
                        <a className="link link-hover">Policy</a>
                    </nav>
                    <nav className=" w-full">
                        <h6 className="footer-title text-lg text-white font-bold  mb-3">Popular Categories</h6>
                        <a className="link link-hover">Mountain Treks</a>
                        <a className="link link-hover">Ocean Dives</a>
                        <a className="link link-hover">River Adventures</a>
                        <a className="link link-hover">Forest Expeditions</a>
                        <a className="link link-hover">Camping Retreats</a>
                    </nav>
                    <nav className="w-full">
                        <h6 className="footer-title  text-white text-lg">Subscribe</h6>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-[#ffffff83]">Subscribe for the latest updates.</span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="input input-bordered join-item text-black w-full" />
                                <button
                                    className="btn bg-orange-400 hover:bg-orange-500 border-none join-item">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </nav>

                </div>
            </footer>
        </div>
    );
};

export default Footer;