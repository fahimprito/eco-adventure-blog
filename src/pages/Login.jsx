import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });

        loginUser(email, password)
            .then(() => {
                e.target.reset();
                navigate(location.state ? location.state : '/');
            })
            .catch(err => {
                setError({ ...error, login: err.message });
            })
    }

    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then(() => {
                navigate(location.state ? location.state : '/');
            })
            .catch(error => {
                console.log('ERROR', error.message)
            })
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

                    {error.login && (
                        <label className="label text-sm text-red-600">
                            {error.login}
                        </label>
                    )}

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
                    onClick={handleGoogleSignIn}
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