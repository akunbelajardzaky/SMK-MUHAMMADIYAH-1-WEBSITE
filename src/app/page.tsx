import React from "react";
import Navbar from "../components/Navbar/App";
import { HeroBullets } from "./Hero";
import Blog from "../components/blog/Page";
import Statistic from "../components/stats/app";
import Fotter from "../components/fotter/app";

function page() {
  return (
    <>
      <Navbar />
      <HeroBullets />
      <Statistic />
      <Blog />
      <Fotter />
    </>
  );
}

export default page;
