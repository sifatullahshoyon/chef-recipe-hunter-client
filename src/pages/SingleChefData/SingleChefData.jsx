import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Table from "../../components/Table/Table";
import { FcLike } from "react-icons/fc";
import ReactStarsRating from "react-awesome-stars-rating";
import toast from "react-hot-toast";
import Loading from "../../components/Loading/Loading";
import LazyLoad from "react-lazy-load";

const SingleChefData = () => {
  const [disable, setDisable] = useState(false);
  const data = useLoaderData();

  const { state } = useNavigation();
  if (state === "loading") {
    return <Loading />;
  }

  const {
    chefName,
    chefPicture,
    cookingMethod,
    likes,
    numberOfRecipes,
    rating,
    recipes,
    shortBio,
    yearsOfExperience,
  } = data;
  const handleFavoriteBtn = () => {
    toast("The Recipe is your favorite 🥰");
    setDisable(!disable);
  };
  return (
    <div className="bg-white ">
      <div className="container mx-auto px-10 py-32">
        <div className="mx-auto w-full">
          <figure>
            <LazyLoad height={762}>
              <img
                src={chefPicture ? chefPicture : "Image Not Found"}
                alt="chefPicture"
                className="object-cover mx-auto  h-96"
              />
            </LazyLoad>
          </figure>
        </div>
        <h2 className="text-black text-xl my-3">
          <span className="text-black font-bold">Name: </span>
          {chefName ? chefName : "Data Not Found"}
        </h2>
        <p className="text-black text-xl my-3">
          <span className="text-black font-bold">Details: </span>
          {shortBio ? shortBio : "Data Not Found"}
        </p>
        <p className="text-black text-xl my-3">
          <span className="text-black font-bold">Cooking Method: </span>
          {cookingMethod ? cookingMethod : "Data Not Found"}
        </p>
        <p className="text-black text-xl my-3">
          <span className="text-black font-bold">Number Of Recipes: </span>
          {numberOfRecipes ? numberOfRecipes : "Data Not Found"}
        </p>
        <div className="my-5">
          {recipes?.map((recipe) => (
            <Table key={recipe.id} recipe={recipe} />
          ))}
        </div>
        <p className="text-black text-xl my-3">
          <span className="text-black font-bold">Years Of Experience: </span>
          {yearsOfExperience ? yearsOfExperience : "Data Not Found"} years
        </p>
        <div className="flex items-center gap-2">
          <p className="text-black text-xl my-3">
            <span className="text-black font-bold">likes: </span>
            {likes ? likes : "Data Not Found"}
          </p>
          <FcLike />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-black text-xl my-3">
            <span className="text-black font-bold">Rating: </span>
            {rating ? rating : "Data Not Found"}
          </p>
          <ReactStarsRating className="flex" value={rating} />
        </div>
        {disable ? (
          <button
            onClick={handleFavoriteBtn}
            disabled
            className="btn btn-wide my-4 text-white bg-indigo-600 border-0 text-lg"
          >
            Favorite
          </button>
        ) : (
          <button
            onClick={handleFavoriteBtn}
            className="btn btn-wide my-4 text-white bg-indigo-600 border-0 text-lg"
          >
            Favorite
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleChefData;
