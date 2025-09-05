import React, { useContext } from "react";
import Lottie from "lottie-react";
import signin from '../../assets/Login & Mobile Login.json';
import AuthContext from "../../context/AuthContext/AuthContext";

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            console.log('Sign In', result.user)
        })
        .catch(error => {
            console.log(error);
        })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={signin} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <fieldset className="fieldset">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">LogIn</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;