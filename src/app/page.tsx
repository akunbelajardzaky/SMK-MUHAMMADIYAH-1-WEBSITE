import React from "react";
import Navbar from "../components/Navbar/Page";
import { HeroBullets } from "./Hero";
import Home from "../components/blog/Page";
const page = () => {
  return (
    <>
      <Navbar />
      <HeroBullets />
      <Home />
    </>
  );
};

export default page;
