import React from "react";
import { FcLike } from "react-icons/fc";

const Chef = ({ chef }) => {
  const {
    id,
    chefPicture,
    chefName,
    yearsOfExperience,
    likes,
    numberOfRecipes,
  } = chef;
  return (
    <div>
      <div className="card card-compact h-[400px] text-black shadow-xl">
        <figure>
          <img
            src={chefPicture ? chefPicture : "Images Not Found"}
            alt="chef Picture"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {chefName ? chefName : "Data Not Found"}
          </h2>
          <p className="font-neue">
            Number Of Recipes :{" "}
            {numberOfRecipes ? numberOfRecipes : "Data Not Found"}
          </p>
          <p className="font-neue">
            Years Of Experience :{" "}
            {yearsOfExperience ? yearsOfExperience : "Data Not Found"}
          </p>
          <div className="flex justify-start gap-2 items-center">
            <span className="font-neue">
              Total Likes : {likes ? likes : "Data Not Found"}
            </span>
            <span>
              <FcLike />
            </span>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
