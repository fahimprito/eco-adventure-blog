import aboutBg from "../assets/grandcanyon.jpg"

const About = () => {
    return (
        <div className="min-h-screen">
            
            <div
                className="bg-cover bg-center h-[300px] lg:h-[400px] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${aboutBg})`,
                }}
            >
                <div className="bg-black bg-opacity-50 p-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white">
                        About Us
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-300 mt-2">
                        Your trusted guide for sustainable adventures.
                    </p>
                </div>
            </div>

            <div className="bg-gray-50 py-10 lg:py-16 px-6 lg:px-16">
                <div className="max-w-4xl mx-auto space-y-8">
                    
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 leading-7">
                            At <span className="font-semibold">EcoTravelers</span>, we aim to
                            inspire, educate, and empower travelers to explore the world
                            responsibly. Our mission is to connect people with nature while
                            promoting sustainable practices that protect the beauty of our
                            planet.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Our Vision
                        </h2>
                        <p className="text-gray-600 leading-7">
                            We envision a world where adventurers embrace sustainable travel,
                            leaving minimal footprints while exploring the wonders of nature.
                            From lush forests to serene beaches, our goal is to preserve the
                            natural world for future generations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Why Choose Us?
                        </h2>
                        <p className="text-gray-600 leading-7">
                            <span className="font-semibold">EcoTravelers</span> is your
                            partner in sustainable adventures. We curate eco-friendly travel
                            experiences that combine exploration with environmental
                            responsibility. Choose us to make every adventure meaningful and
                            impactful.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default About;