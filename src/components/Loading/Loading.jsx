import React from "react";

const Loading = () => {
  return (
    <div className="bg-white">
      <div className="container h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-success text-center"></span>
      </div>
    </div>
  );
};

export default Loading;
