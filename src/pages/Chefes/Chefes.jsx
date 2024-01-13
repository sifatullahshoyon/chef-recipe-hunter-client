import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Chef from "../Chef/Chef";
import Loading from "../../components/Loading/Loading";

const Chefes = () => {
  const chefsData = useLoaderData();
  const { state } = useNavigation();
  if (state === "loading") {
    return <Loading />;
  }
  return (
    <div className="bg-white">
      <div className="container mx-auto py-32 px-5">
        <h1 className="text-center text-black font-mono text-5xl py-5">
          Our Chef
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {chefsData?.map((chef) => (
           <Chef key={chef.id} chef={chef} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefes;
