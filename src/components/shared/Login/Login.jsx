import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { AuthContext } from "../../../context/AuthProviders";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, resetPassword, googleLogin, githubLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  let location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password === " ") {
      return toast.error("please provide a valid password");
    }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Login successfully");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    resetPassword(email)
      .then((result) => {
        console.log(result);
        toast("Password reset email sent!");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => result.user)
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => result.user)
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="bg-white">
      <div className="container mx-auto  min-h-screen w-full">
        <div className="flex justify-center items-center h-screen">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <h3 className="text-black text-4xl font-neue font-medium mb-5 tracking-wide">
                Login
              </h3>
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
                <div className="form-control input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
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
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-brown hover:text-brown font-neue"
                    onClick={handleResetPassword}
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <p className="text-black font-neue">
                  Don’t have an account?{" "}
                  <span className="text-brown hover:underline">
                    <Link to="/registration">Create an account</Link>
                  </span>
                </p>
              </div>
              <div className="flex justify-center text-black items-center gap-3">
                <hr className="w-2/5" />
                <span>or</span>
                <hr className="w-2/5" />
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-primary bg-transparent hover:bg-transparent  text-brown"
                >
                  <FaGoogle /> Google
                </button>
              </div>
              <div className="form-control mt-2">
                <button
                  onClick={handleGithubLogin}
                  className="btn btn-primary bg-transparent hover:bg-transparent border-black text-brown"
                >
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

export default Login;
