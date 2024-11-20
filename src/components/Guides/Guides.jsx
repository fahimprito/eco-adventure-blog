import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";


const Guides = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold mb-10 md:mb-14 px-4 md:divider md:divider-start">Sustainable Adventure Guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {/* Column 1 */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">How To’s</h3>
                        <ul className="space-y-2 text-lg font-semibold">
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />
                                <Link className="hover:underline hover:text-[#f97e1a]">How to Save Money for Travel</Link>
                            </li>
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />
                                <Link className="hover:underline hover:text-[#f97e1a]">How to Find Cheap Flights</Link>
                            </li>
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />
                                <Link className="hover:underline hover:text-[#f97e1a]">Search Anywhere with Google Flights</Link>
                            </li>
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />
                                <Link className="hover:underline hover:text-[#f97e1a]">How to Overcome Your Fear of Traveling</Link>
                            </li>
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />
                                <Link className="hover:underline hover:text-[#f97e1a]">How to Get Over Your Fear of Flying</Link>
                            </li>
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />
                                <Link className="hover:underline hover:text-[#f97e1a]">How to Teach English Abroad</Link>
                            </li>
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />
                                <Link className="hover:underline hover:text-[#f97e1a]">How to Work Abroad</Link>
                            </li>
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />
                                <Link className="hover:underline hover:text-[#f97e1a]">How to Stay in Europe for Longer than 90 Days</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Packing Tips</h3>
                        <ul className="space-y-2 text-lg font-semibold">
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />

                                <Link className="hover:underline hover:text-[#f97e1a]">How to Pack a Suitcase</Link>
                            </li>
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />

                                <Link className="hover:underline hover:text-[#f97e1a]">How to Measure Luggage</Link>
                            </li>
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />

                                <Link className="hover:underline hover:text-[#f97e1a]">How to Clean a Suitcase</Link>
                            </li>
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />

                                <Link className="hover:underline hover:text-[#f97e1a]">Is a Backpack a Personal Item?</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Industry Research</h3>
                        <ul className="space-y-2 text-lg font-semibold">
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />
                                <Link className="hover:underline hover:text-[#f97e1a]">US Airline Delay Statistics</Link>
                            </li>
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />
                                <Link className="hover:underline hover:text-[#f97e1a]">Luggage Statistics</Link>
                            </li>
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />
                                <Link className="hover:underline hover:text-[#f97e1a]">Backpack Statistics</Link>
                            </li>
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />
                                <Link className="hover:underline hover:text-[#f97e1a]">Booking.com Statistics</Link>
                            </li>
                            <li className="flex items-center gap-2"><MdOutlineArrowForwardIos />
                                <Link className="hover:underline hover:text-[#f97e1a]">Business Travel Statistics</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Guides;