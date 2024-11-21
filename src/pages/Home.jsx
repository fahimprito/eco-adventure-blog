import AllAdventures from "../components/AdventureCards/AllAdventures";
import Banner from "../components/Banner/Banner";
import Guides from "../components/Guides/Guides";
import TravelersStories from "../components/TravelersStories/TravelersStories";



const Home = () => {
    return (
        <div className="bg-base-200">
            {/* banner */}
            <section>
                <Banner></Banner>
            </section>
            {/* Adventure Experiences Section */}
            <section className="container mx-auto">
                <AllAdventures></AllAdventures>
                
            </section>


            <section>
                <TravelersStories></TravelersStories>
            </section>
            <section>
                <Guides></Guides>
            </section>


        </div>
    );
};

export default Home;