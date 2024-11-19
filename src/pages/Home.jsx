import AllAdventures from "../components/AdventureCards/AllAdventures";
import Banner from "../components/Banner/Banner";



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


            <section></section>
            <section></section>


        </div>
    );
};

export default Home;