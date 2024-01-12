import React from "react";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Chefes from "../Chefes/Chefes";
import History from "../History/History";

const Home = () => {
  return (
    <>
      <Header />
      <Chefes />
      <Services />
      <History />
    </>
  );
};

export default Home;
