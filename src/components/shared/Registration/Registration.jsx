import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { AuthContext } from "../../../context/AuthProviders";
import toast from 'react-hot-toast';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {createUser , googleLogin , githubLogin} = useContext(AuthContext);

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    console.log(name, email, password, confirm , photo);

    // Password Validation
    if(password !== confirm){
        toast.error("The password doesn't Match");
        return;
    }else if(!/(?=.*?[A-Z])/.test(password)){
        toast.error("Please provide at least one upper-case letter");
        return;
    }else if(!/(?=.*?[a-z])/.test(password)){
        toast.error("Please provide at least one lower-case letter");
        return;
    }else if(!/(?=.*?[0-9])/.test(password)){
        toast.error("Please provide at least one digit");
        return;
    }else if(!/(.{8,})/.test(password)){
        toast.error("Password Must Be 8 character");
        return;
    }else if(!/(^\S+@\S+\.\S+$)/.test(email)){
        toast.error("Please provide a valid email address");
        return;
    }

    createUser(email , password)
    .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success('user create successfully');
        form.reset();
    })
    .catch((error) => {
        toast.error(error.message);
    })

  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then((result) => result.user)
    .catch((error) => {
        console.error(error.message)
    })
  };

  const handleGithubLogin = () => {
    githubLogin()
    .then((result) => result.user)
    .catch((error) => {
        console.error(error.message)
    })
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
                  name="name"
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
                  placeholder="exaple@gmail.com"
                  name="email"
                  className="p-2 text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-lg font-neue tracking-wide">
                    Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  placeholder="Upload Your Photo url"
                  name="photo"
                  className="p-2 text-black"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-lg font-neue tracking-wide">
                    Password
                  </span>
                </label>
                <div className="form-control input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    className="p-2 text-black"
                    required
                  />
                  <div onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <IoEyeSharp className="icon" />
                    ) : (
                      <FaRegEyeSlash className="icon" />
                    )}
                  </div>
                </div>
                <label className="label">
                  <span className="label-text text-black text-lg font-neue tracking-wide">
                    Confirm Password
                  </span>
                </label>
                <div className="form-control input-container">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirm"
                    className="p-2 text-black"
                    required
                  />
                  <div
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <IoEyeSharp className="icon" />
                    ) : (
                      <FaRegEyeSlash className="icon" />
                    )}
                  </div>
                </div>
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
                <button onClick={handleGoogleLogin } className="btn btn-primary bg-transparent hover:bg-transparent  text-brown">
                  <FaGoogle /> Google
                </button>
              </div>
              <div className="form-control mt-2">
                <button onClick={handleGithubLogin} className="btn btn-primary bg-transparent hover:bg-transparent border-black text-brown">
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
