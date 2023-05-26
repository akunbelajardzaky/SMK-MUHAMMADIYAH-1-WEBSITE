import React from "react";
import Header from "@/components/Header";
import Lottie from "@/layout/lottie";
import { Cinzel_Decorative } from "next/font/google";
import Text from "../assets/icon/Title.svg";
import Image from "next/image";

function page() {
  return (
    <>
      <div className=" mr-10 ml-10 ">
        <Header href="meme" text="Go to meme" />

        <div className="mt-4 mr-4 ml-4 flex justify-between mb-19  items-center">
          <Image
            src={Text}
            width={367}
            height={197}
            alt="Info kajian jogjakarta"
          />
          <Lottie />
        </div>
        <title className="text-bold">This apps develop by infokajianjogjakarta</title>
      </div>
    </>
  );
}

export default page;
