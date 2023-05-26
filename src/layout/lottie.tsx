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
      <Lottie animationData={Masjid} style={style} />
    </div>
  );
}

export default lottie;
