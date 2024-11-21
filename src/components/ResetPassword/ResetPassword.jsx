import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { EmailContext } from "../../providers/EmailProvider";


const ResetPassword = () => {
    const [error, setError] = useState("");
    const { PasswordReset } = useContext(AuthContext);
    const { email, setEmail } = useContext(EmailContext);

    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;


        PasswordReset(email)
            .then(() => {
                window.open('https://mail.google.com/mail/', '_blank');
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const handleChange = (e) => {
        setEmail(e.target.value); 
    };

    return (
        <div className="py-20 px-4">

            <div className="border rounded-xl bg-white md:w-3/4 lg:w-1/3 mx-auto p-10">
                <h2 className="text-3xl font-semibold mb-4 text-center">Enter your registered email</h2>

                <form onSubmit={handleResetPassword}>

                    <div className="form-control mt-4">
                        <input type="email" name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter your email address" className="input rounded-none bg-base-200" required />
                    </div>
                    {error && (
                        <label className="label text-sm text-red-600">
                            {error}
                        </label>
                    )}

                    <div className="form-control mt-8">
                        <button className="btn bg-[#f9a31a] hover:bg-[#db8727] text-lg rounded-md">
                            Reset Password
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default ResetPassword;