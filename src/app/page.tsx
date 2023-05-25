import React from "react";
import Header from "@/components/Header";
import Lottie from "@/layout/lottie";
import { Cinzel_Decorative } from "next/font/google";

const font = Cinzel_Decorative

function page() {
  return (
    <>
      <>
        <Header href="meme" text="Go to meme" />
      </>
      <div className="mt-4 mr-4 ml-4 flex justify-between mb-19  items-center">
        <h1 className="{font.font}">info kajian</h1>
        <Lottie />
      </div>
    </>
  );
}

export default page;
