import React, { useContext } from "react";
import Lottie from "lottie-react";
import register from '../../assets/register.json';
import AuthContext  from "../../context/AuthContext/AuthContext";


const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // Password validation
        if (password.length < 6) {
            alert("Password should be at least 6 characters");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log("User registered:", result.user);
                alert("Registration successful!");
                form.reset();
            })
            .catch(error => {
                console.error(error.message);
                alert(error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={register} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
