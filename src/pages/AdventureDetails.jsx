import { useLoaderData, useParams } from "react-router-dom";
// import img from "../assets/AfricanWildlifeSafari.jpg"
import { RiArrowRightSLine } from "react-icons/ri";
import { MdErrorOutline } from "react-icons/md";

const AdventureDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const adventure = data.find(sAdventure => sAdventure.id == id);

    const { image, title, category, shortDescription, cost, bookingAvailability, location, duration, adventureLevel, includedItems, ecoFriendlyFeatures, maxGroupSize, specialInstructions } = adventure;

    const handleTalkToExpert = () => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if (currentHour >= 10 && currentHour < 20) {
            window.open('https://meet.google.com/', '_blank');
        } else {
            document.getElementById('purchase_modal').showModal();
        }

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


            {/* modal */}
            <div>
                <dialog id="purchase_modal" className="modal sm:modal-middle">
                    <div className="modal-box flex flex-col items-center">
                        <p className="text-7xl text-red-400 mb-6"><MdErrorOutline /></p>
                        <h3 className="text-2xl font-bold">We’re Closed Right Now!</h3>
                        <div className="divider"></div>
                        <p className="text-lg text-gray-600 text-center pb-4">Our eco-experts are available to assist you from 10:00 AM to 8:00 PM daily. Please check back during these hours for expert guidance on your next adventure!</p>
                        <div className="modal-action grid grid-cols-1 w-full">
                            <form method="dialog">
                                <button
                                    // onClick={handleCloseModal}
                                    className="btn bg-[#f9a31aa1] hover:bg-[#f9a31a] text-lg w-full px-10">
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

        </div>
    );
};

export default AdventureDetails;