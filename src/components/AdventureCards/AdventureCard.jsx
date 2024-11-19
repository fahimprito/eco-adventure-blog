import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const AdventureCard = ({ adventure }) => {
    const { id, image, title, ecoFriendlyFeatures } = adventure;

    return (
        <div>
            <div className="rounded-t-xl bg-base-200 border border-b-base-200 p-1 pb-3">
                <img className="mx-auto w-full rounded-t-xl h-52 object-cover" src={image} alt="" />
                <div className="flex flex-col items-start gap-2 mt-3 px-2">

                    <h2 className="font-bold text-xl items-center">{title}</h2>
                    <div>
                        {
                            ecoFriendlyFeatures.map((feature, index) =>
                                <p key={index} className="text-gray-600 text-base font-medium">{feature}</p>)
                        }
                    </div>
                    <Link
                        to={`/adventure/${id}`}
                        className="btn btn-sm px-2 bg-[#403F3F] hover:bg-[#f9a31ae1] text-white hover:text-black font-semibold text-base hover:underline underline-offset-2 decoration-2 decoration-black">
                        Explore Now <MdKeyboardDoubleArrowRight />
                    </Link>

                </div>

            </div>
        </div>
    );
};

AdventureCard.propTypes = {
    adventure: PropTypes.object,
};

export default AdventureCard;