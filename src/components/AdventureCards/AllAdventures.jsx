import AdventureCard from "./AdventureCard";


const AllAdventures = () => {
    return (
        <div>
            <div>
                <h2 className="text-3xl font-semibold mb-6">Adventure Experiences</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <AdventureCard></AdventureCard>
                <AdventureCard></AdventureCard>
                <AdventureCard></AdventureCard>
                <AdventureCard></AdventureCard>
                <AdventureCard></AdventureCard>

            </div>

        </div>
    );
};

export default AllAdventures;