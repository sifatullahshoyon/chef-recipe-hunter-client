import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error.message));
  };

  return (
    <nav className="bg-black sticky top-0">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* Mobile Responsive Start */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-white shadow rounded  w-52"
            >
              <li className="text-tertiary text-white">
                <NavLink
                  to="/"
                  className={(isActive) => {
                    isActive ? "default" : "active";
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink
                  to="/about"
                  className={(isActive) => {
                    isActive ? "default" : "active";
                  }}
                >
                  About
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink
                  to="/login"
                  className={(isActive) => {
                    isActive ? "default" : "active";
                  }}
                >
                  Login
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink
                  to="/blog"
                  className={(isActive) => {
                    isActive ? "default" : "active";
                  }}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            {/* Mobile Responsive End */}
          </div>
          <NavLink
            to="/"
            className={(isActive) => {
              isActive ? "default" : "active";
            }}
          >
            <p className="text-white">
              Recipe <span className="text-tertiary">Hunter</span>
            </p>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white">
              <NavLink
                to="/"
                className={(isActive) => {
                  isActive ? "active" : "default";
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink
                to="/about"
                className={(isActive) => {
                  isActive ? "default" : "active";
                }}
              >
                About
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink
                to="/login"
                className={(isActive) => {
                  isActive ? "default" : "active";
                }}
              >
                Login
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink
                to="/blog"
                className={(isActive) => {
                  isActive ? "default" : "active";
                }}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center items-center gap-4">
            {user && (
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img
                    src={user.photoURL ? user.photoURL : <span>U</span>}
                    title={user.displayName}
                  />
                </div>
              </div>
            )}
            {user ? (
              <button onClick={handleLogout} className="btn btn-info">
                Log out
              </button>
            ) : (
              <button className="btn btn-info">
                <Link to="/login">Sign In</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
