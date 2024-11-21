import travelerman1 from "../../assets/travelerMan1.jpg"
import travelerwoman1 from "../../assets/travelerWoman1.jpg"
import travelerwoman2 from "../../assets/travelerWoman2.jpg"

const TravelersStories = () => {

    return (
        <div className="py-12 bg-gray-100">
            <div className="container mx-auto">

                <h2 className="text-3xl font-bold my-6 md:my-10 px-4 md:divider md:divider-start">
                    Adventure Stories from Our Travelers
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <img
                            src={travelerwoman1}
                            alt="traveler img"
                            className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-lg font-semibold text-orange-600">Sarah Johnson</h3>
                        <p className="text-sm text-gray-500 italic">Sundarbans Mangrove Safari</p>
                        <p className="text-gray-700 mt-2">The Sundarbans adventure was a life-changing experience. Truly a gem of nature!</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <img
                            src={travelerman1}
                            alt="traveler img"
                            className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-lg font-semibold text-orange-600">David Lee</h3>
                        <p className="text-sm text-gray-500 italic">Mountain Trek Adventure</p>
                        <p className="text-gray-700 mt-2">The views from Bandarban were simply breathtaking. A must-visit for adventure lovers!</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <img
                            src={travelerwoman2}
                            alt="traveler img"
                            className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-lg font-semibold text-orange-600">Ayesha Rahman</h3>
                        <p className="text-sm text-gray-500 italic">Ocean Diving Experience</p>
                        <p className="text-gray-700 mt-2">The underwater world was magical. This trip made me fall in love with the ocean!</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default TravelersStories;