import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {
    const { updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        // get form data 
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log({ name, photo });

        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                setError(err.message);
            });

    }

    return (
        <div className="my-20">

            <div className="border md:w-3/4 lg:w-1/3 mx-auto p-10">
                <h2 className="text-3xl font-semibold mb-4 text-center">Update your profile!</h2>

                <form onSubmit={handleUpdateProfile}>
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input rounded-none bg-base-200" required />

                    </div>
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input rounded-none bg-base-200" required />
                    </div>

                    {error && (
                        <label className="label text-sm text-red-600">
                            {error}
                        </label>
                    )}

                    <div className="form-control mt-8">
                        <button className="btn bg-[#f9a31a] hover:bg-[#db8727] text-lg rounded-md">
                            Update
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default UpdateProfile;