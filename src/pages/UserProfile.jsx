import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const UserProfile = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const { displayName, email, photoURL } = user;

    return (
        <div className="my-20">

            <div className="border md:w-3/4 lg:w-1/3 mx-auto p-10">
                <h2 className="text-3xl font-semibold mb-4 text-center">Welcome, {displayName}!</h2>
                <div className="divider"></div>
                <div className="p-10 flex flex-col gap-4 items-start">
                    <img
                        src={photoURL}
                        alt="Profile Icon"
                        className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <p className="text-lg font-medium">Name: {displayName}</p>
                    <p className="text-lg font-medium">Email: {email}</p>
                </div>

                <div className="form-control mt-4">
                    <Link className="btn bg-[#f9a31a] hover:bg-[#db8727] text-lg rounded-md">Update Profile</Link>
                </div>

            </div>
        </div>
    );
};

export default UserProfile;