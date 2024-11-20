import img from "../assets/AfricanWildlifeSafari.jpg"
import { RiArrowRightSLine } from "react-icons/ri";

const AdventureDetails = () => {
    return (
        <div className="container mx-auto space-y-4 m-10 mb-20 px-4">
            <p className="font-semibold text-gray-500 flex items-center">Home <RiArrowRightSLine /> Adventure details</p>
            <h5 className="text-3xl md:text-5xl font-bold title-font md:w-2/3">African Wildlife Safari</h5>
            <p className="text-xl font-medium text-gray-500 pb-10">Join an exciting safari adventure and witness Africa`s iconic wildlife. Perfect for nature lovers and photographers.</p>

            <div className=" bg-white grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                    <img className="mx-auto mb-2" src={img} alt="" />
                </div>


                <div className="flex flex-col gap-2">
                    <div>
                        <p
                            className="badge text-gray-600 text-base bg-gray-100  p-4">
                            category
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Eco-Friendly Features:</h3>
                        <ul className="list-inside text-lg text-gray-600">
                            {
                                // specification.map((spac, index) => <li key={index}>{spac}</li>)
                            }
                            <li>Solar-powered lodges</li>
                            <li>Anti-poaching programs supported</li>
                            <li>Recycling initiatives implemented</li>
                            <li>Sustainable tourism and conservation</li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                        <h3 className="text-lg font-semibold">Location:</h3>
                        <p className="text-lg font-medium text-gray-500 col-span-2">
                            Serengeti National Park, Tanzania
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                        <h3 className="text-lg font-semibold">Duration:</h3>
                        <p className="text-lg font-medium text-gray-500 col-span-2">
                            7 days
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                        <h3 className="text-lg font-semibold">Max Group Size:</h3>
                        <p className="text-lg font-medium text-gray-500 col-span-2">
                            4 person
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                        <h3 className="text-lg font-semibold">Adventure Level:</h3>
                        <p className="text-lg font-medium text-gray-500 col-span-2">
                            adventureLevel
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                        <h3 className="text-lg font-semibold">Booking Availability:</h3>
                        <p className="badge text-[#23BE0A] text-base bg-[#22be0a11] p-3 col-span-2">
                            Available
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                        <h3 className="text-lg font-semibold">Cost:</h3>
                        <p className="text-lg font-medium text-gray-500 col-span-2">
                            $987
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                        <h3 className="text-lg font-semibold">Included Items:</h3>
                        <ul className="flex space-x-2 list-inside text-lg text-gray-600 col-span-2">
                            {
                                // specification.map((spac, index) => <li key={index}>{spac}</li>)
                            }
                            <li className="after:content-[','] last:after:content-['']">sdfsdfsdf</li>
                            <li className="after:content-[','] last:after:content-['']">sdfsdfsdf</li>
                            <li className="after:content-[','] last:after:content-['']">sdfsdfsdf</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Special Instructions:</h3>
                        <ul className="list-inside text-lg text-gray-600">
                            {
                                // specification.map((spac, index) => <li key={index}>{spac}</li>)
                            }
                            <li>sdfsdfsdfsdfsdfsdfsdfsdf</li>
                            <li>sdfssdfsdfsdfsdfsdfsdfsdfsdfdf</li>
                            <li>sdfssdfsdfsdfsdfsdfsdfdf</li>
                            <li>sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf</li>
                        </ul>
                    </div>

                    <div className="flex mt-2">
                        <button
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