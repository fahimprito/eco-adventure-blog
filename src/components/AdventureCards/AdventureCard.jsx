import { Link } from "react-router-dom";
import img from "../../assets/AfricanWildlifeSafari.jpg"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const AdventureCard = () => {
    return (
        <div>
            <div className="rounded-xl bg-base-200 border p-1 pb-3">
                <img className="mx-auto w-full rounded-t-xl h-52 object-cover" src={img} alt="" />
                <div className="flex flex-col items-start gap-2 mt-3 px-2">

                    <h2 className="font-bold text-xl flex gap-4 items-center">African Wildlife Safari</h2>
                    <div>
                        <h4 className="text-gray-600 text-base font-medium">Solar-powered lodges</h4>
                        <h4 className="text-gray-600 text-base font-medium">Anti-poaching initiatives</h4>
                        <h4 className="text-gray-600 text-base font-medium">Support for wildlife conservation through donations</h4>
                        <h4 className="text-gray-600 text-base font-medium">Eco-certified hiking equipment provided</h4>
                    </div>
                    <Link
                        to={`/product/id`}
                        className="btn btn-sm px-2 bg-[#403F3F] hover:bg-[#f9a31ae1] text-white hover:text-black font-semibold text-base hover:underline underline-offset-2 decoration-2 decoration-black">
                        Explore Now <MdKeyboardDoubleArrowRight />
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default AdventureCard;