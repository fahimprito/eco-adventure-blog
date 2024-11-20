import { useLoaderData, useParams } from "react-router-dom";
// import img from "../assets/AfricanWildlifeSafari.jpg"
import { RiArrowRightSLine } from "react-icons/ri";

const AdventureDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const adventure = data.find(sAdventure => sAdventure.id == id);

    const { image, title, category, shortDescription, cost, bookingAvailability, location, duration, adventureLevel, includedItems, ecoFriendlyFeatures, maxGroupSize, specialInstructions } = adventure;

    const handleTalkToExpert = () => {
        console.log("opening");
        
    }

    return (
        <div className="container mx-auto space-y-4 m-10 mb-20 px-4">
            <p className="font-semibold text-gray-500 flex items-center">Home <RiArrowRightSLine /> Adventure details</p>
            <h5 className="text-3xl md:text-5xl font-bold title-font md:w-2/3">{title}</h5>
            <p className="text-xl font-medium text-gray-500 pb-10">{shortDescription}</p>

            <div className=" bg-white grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                    <img className="w-full mb-2" src={image} alt="" />
                </div>


                <div className="flex flex-col gap-2">
                    <div className="mb-2">
                        <p
                            className="badge text-gray-600 text-base bg-gray-100 p-4 px-3">
                            {category}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Eco-Friendly Features:</h3>
                        <ul className="list-inside text-lg text-gray-600">
                            {
                                ecoFriendlyFeatures.map((feature, index) => <li key={index}>{feature}</li>)
                            }
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                        <h3 className="text-lg font-semibold">Location:</h3>
                        <p className="text-lg font-medium text-gray-500 col-span-2">
                            {location}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                        <h3 className="text-lg font-semibold">Duration:</h3>
                        <p className="text-lg font-medium text-gray-500 col-span-2">
                            {duration}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                        <h3 className="text-lg font-semibold">Max Group Size:</h3>
                        <p className="text-lg font-medium text-gray-500 col-span-2">
                            {maxGroupSize}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                        <h3 className="text-lg font-semibold">Adventure Level:</h3>
                        <p className="text-lg font-medium text-gray-500 col-span-2">
                            {adventureLevel}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                        <h3 className="text-lg font-semibold">Booking Availability:</h3>
                        {
                            bookingAvailability ?
                                <p className="badge text-[#23BE0A] text-base bg-[#22be0a11] p-3 col-span-2">
                                    Available
                                </p> : <p className="badge text-red-500 text-base bg-[#be160a11] p-3 col-span-2">
                                    unavailable
                                </p>
                        }
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                        <h3 className="text-lg font-semibold">Cost:</h3>
                        <p className="text-lg font-medium text-gray-500 col-span-2">
                            ${cost}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                        <h3 className="text-lg font-semibold">Included Items:</h3>
                        <ul className="flex space-x-2 list-inside text-lg text-gray-600 col-span-2">
                            {
                                includedItems.map((item, index) => <li
                                    key={index} className="after:content-[','] last:after:content-['']">{item}</li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Special Instructions:</h3>
                        <ul className="list-inside text-lg text-gray-600">
                            {
                                specialInstructions.map((instruction, index) => <li key={index}>{instruction}</li>)
                            }
                        </ul>
                    </div>

                    <div className="flex mt-2">
                        <button
                            onClick={handleTalkToExpert}
                            className="btn bg-[#f9a31a] hover:bg-[#db8727] text-lg rounded-md">
                            Talk with Expert
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AdventureDetails;