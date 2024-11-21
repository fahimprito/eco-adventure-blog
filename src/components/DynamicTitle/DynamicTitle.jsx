import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        let title;

        if (location.pathname.startsWith("/adventure/")) {
            title = "Adventure Details | EcoTravelers";
        } else {
            const pageTitles = {
                "/": "Home | EcoTravelers",
                "/about": "About Us | EcoTravelers",
                "/updateprofile": "Update Profile | EcoTravelers",
                "/myprofile": "My Profile | EcoTravelers",
                "/adventures": "Adventures | EcoTravelers",
                "/adventure/:id": "Adventure Details | EcoTravelers",
                "/login": "Login | EcoTravelers",
                "/register": "Register | EcoTravelers",
                "/resetpassword": "Reset-password | EcoTravelers",
            };
            
            title = pageTitles[location.pathname] || "Explore Nature | EcoTravelers";
        }

        document.title = title;

    }, [location]);

    return null;
};

export default DynamicTitle;
