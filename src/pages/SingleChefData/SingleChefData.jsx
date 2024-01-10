import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleChefData = () => {
    const data = useLoaderData();
    console.log(data)
    const {chefName , chefPicture , cookingMethod, likes, numberOfRecipes, rating, recipes, shortBio, yearsOfExperience} = data;
    return (
        <div className='bg-white h-screen'>
            <div className='container mx-auto px-10 py-32'>
            {/* <div className="card card-side shadow-xl">
  <figure><img src={chefPicture ? chefPicture : 'Image Not Found'} className='object-cover w-96 h-96' alt="chefPicture"/></figure>
  <div className="card-body">
    <h2 className="card-title text-black"><span className='text-black font-bold'>Name: </span>{chefName ? chefName : 'Data Not Found'}</h2>
    <p className='text-black'><span className='text-black font-bold'>Details: </span>{shortBio ? shortBio : 'Data Not Found'}</p>
    <p className='text-black mt-0'><span className='text-black font-bold'>Cooking Method: </span>{cookingMethod ? cookingMethod : 'Data Not Found'}</p>
    <div>
        <p>Recipes:</p>
        {
            recipes?.map(recipe => <div>
                <div className='md:flex justify-around items-center gap-4'>
                    <div><h6>Recipe Name: {recipe?.recipeName}</h6></div>
                    <div><p><span>Description: </span>{recipe?.description}</p></div>
                    <div><p><span>Likes: </span>{recipe?.likes}</p></div>
                </div>
                
                
               
            </div>)
        }
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
            </div> */}
            <div>
                <figure><img src="" alt="" /></figure>
            </div>
            </div>
        </div>
    );
};

export default SingleChefData;