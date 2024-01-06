import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black p-5">
        <p className="text-white text-center mb-4">
          Copyright © Recipe Hunter - 2017. All Rights Reserved By Chef Recipe
          Hunter.
        </p>
        <div className="flex justify-center space-x-3">
          <FaFacebook className="text-white" />
          <FaTwitter className="text-white" />
          <FaYoutube className="text-white" />
          <FaInstagram className="text-white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
