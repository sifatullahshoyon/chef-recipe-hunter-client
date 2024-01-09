import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Registration = () => {
    const handleRegistration = () => {
        console.log('ok');
    };
  return (
    <div className="bg-white">
      <div className="container mx-auto  min-h-screen w-full">
        <div className="flex justify-center items-center h-screen">
          <div className="card shrink-0 md:w-2/4  shadow-2xl">
            <form onSubmit={handleRegistration} className="card-body">
              <h3 className="text-black text-4xl font-neue font-medium mb-5 tracking-wide">
                Create an account
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-lg font-neue tracking-wide">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="email"
                  className="p-2 text-black"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-lg font-neue tracking-wide">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="p-2 text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-lg font-neue tracking-wide">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="p-2 text-black"
                  required
                />
                <label className="label">
                  <span className="label-text text-black text-lg font-neue tracking-wide">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="confirm"
                  className="p-2 text-black"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-brown hover:text-brown font-neue"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
              </div>
              <div>
                <p className="text-black font-neue">
                  Already have an account?{" "}
                  <span className="text-brown hover:underline">
                    <Link to="/login">Login</Link>
                  </span>
                </p>
              </div>
              <div className="flex justify-center text-black items-center gap-3">
                <hr className="w-2/5" />
                <span>or</span>
                <hr className="w-2/5" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-transparent hover:bg-transparent  text-brown">
                  <FaGoogle /> Google
                </button>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary bg-transparent hover:bg-transparent border-black text-brown">
                  <FaGithub /> Github
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
