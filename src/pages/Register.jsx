import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        // get form data 
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, photo, email, password });

        // create user
        createUser(email, password)
            .then(() => {
                e.target.reset();
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                        
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch(error => {
                console.log('ERROR', error.message)
            })


    }

    return (
        <div className="my-10">
            <div className="border md:w-3/4 lg:w-1/3 mx-auto p-10">
                <h2 className="text-3xl font-semibold mb-4 text-center">Register your account</h2>
                <div className="divider"></div>

                <form onSubmit={handleRegister}>
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
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Email address</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input rounded-none bg-base-200" required />
                    </div>
                    <div className="form-control mt-4 relative">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password" placeholder="Enter your password"
                            className={`input rounded-none bg-base-200 ${!showPassword && "font-mono"}`} required />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            type="button"
                            className="btn btn-xs bg-transparent border-none hover:bg-transparent text-base absolute right-2 top-14 ">
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    <div className="form-control mt-8">
                        <button className="btn bg-[#f9a31a] hover:bg-[#db8727] text-lg rounded-md">
                            Register
                        </button>
                    </div>

                </form>

                <p className="text-center mt-4">Already have an account? <Link
                    className="text-[#f9a31a] font-semibold link-hover" to="/login">
                    Login
                </Link></p>
                <div className="divider">OR</div>
                <button
                    // onClick={handleGoogleSignIn}
                    className="btn btn-outline w-full text-blue-500 font-semibold text-lg rounded-full">
                    <span className="text-2xl">
                        <FcGoogle></FcGoogle>
                    </span>
                    Continue with Google
                </button>

            </div>
        </div>
    );
};

export default Register;