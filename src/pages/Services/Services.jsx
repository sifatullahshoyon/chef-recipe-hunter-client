import React from "react";
import { MdBrunchDining } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";
import { FaAmbulance } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-orange-50">
      <div className="container mx-auto py-32 px-5">
        <h1 className="text-center text-black font-mono text-5xl py-5">
          Services
        </h1>
        <p className="text-center text-lg text-gray-400 font-neue tracking-wide">
          When it comes to enjoying a meal outside the comfort of your home, the
          quality of restaurant services plays a crucial role in enhancing your
          overall dining experience. From the moment you step foot into the
          establishment, the attentiveness and professionalism of the staff, the
          cleanliness of the dining area, and the promptness of the service all
          contribute to creating a positive and memorable visit.
        </p>
        <div className="md:flex justify-around mt-10">
          <div className="text-center mb-2">
            <div className="bg-white shadow-lg rounded-full p-5 flex justify-center items-center">
              <MdBrunchDining className=" text-9xl p-2  text-brown" />
            </div>
            <p className="mt-14">
              <small className="text-black font-neue text-xl tracking-wide">
                Fine Dining
              </small>
            </p>
          </div>
          <div className="text-center mb-2">
            <div className="bg-white shadow-lg rounded-full p-5 flex justify-center items-center">
              <GiPartyPopper className=" text-9xl p-2  text-brown" />
            </div>
            <p className="mt-14">
              <small className="text-black font-neue text-xl tracking-wide">
                Event & Party
              </small>
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white shadow-lg rounded-full p-5 flex justify-center items-center">
              <FaAmbulance className=" text-9xl p-2  text-brown" />
            </div>
            <p className="mt-14">
              <small className="text-black font-neue text-xl tracking-wide">
                Home Delivery
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
