import { useEffect, useState } from "react";
import AdventureCard from "./AdventureCard";


const AllAdventures = () => {
    const [adventures, setAdventures] = useState([]);

    useEffect(() => {
        fetch('/adventures.json')
            .then(res => res.json())
            .then(data => setAdventures(data))
    }, [])

    return (
        <div className="py-4 md:py-10 px-4">
            <div>
                <h2 className="text-3xl font-bold my-10 px-4 divider divider-start">Adventure Experiences</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    adventures.map(adventure => <AdventureCard
                        key={adventure.id}
                        adventure={adventure}
                    ></AdventureCard>)
                }

            </div>

        </div>
    );
};

export default AllAdventures;