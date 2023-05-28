"use client";

import React from "react";
import Lottie from "lottie-react";
import Masjid from "@/assets/lottie/Masjid.json";

const style = {
  height: 500,
};

function lottie() {
  return (
    <div>
      <Lottie
        animationData={Masjid}
        style={style}
        width={367}
        height={197}
        alt="Info kajian jogjakarta"
      />
    </div>
  );
}

export default lottie;
