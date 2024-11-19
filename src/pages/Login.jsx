import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });

    }

    return (
        <div className="my-10">
            <div className="border md:w-3/4 lg:w-1/3 mx-auto p-10">
                <h2 className="text-3xl font-semibold mb-4 text-center">Login your account</h2>
                <div className="divider"></div>

                <form onSubmit={handleLogin}>
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
                            className="input rounded-none bg-base-200" required />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            type="button"
                            className="btn btn-xs bg-transparent border-none hover:bg-transparent text-base absolute right-2 top-14 ">
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    <label
                        // onClick={handleForgetPassword}
                        className="label mt-1">
                        <Link className="text-gray-500 text-sm font-medium link-hover">
                            Forgot password?</Link>
                    </label>

                    <div className="form-control mt-4">
                        <button className="btn bg-[#f9a31a] hover:bg-[#db8727] text-lg rounded-md">Login</button>
                    </div>

                </form>
                <p className="text-center mt-4">Do not have an account? <Link
                    className="text-[#f9a31a] font-semibold link-hover" to="/register">
                    Create an account
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

export default Login;