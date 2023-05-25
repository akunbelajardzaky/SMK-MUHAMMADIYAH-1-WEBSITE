"use client";

import React from "react";
import Lottie from "lottie-react";
import ketupat from "@/assets/lottie/ketupat.json";

const style = {
  height: 500,
};

function lottie() {
  return (
    <div>
      <Lottie animationData={ketupat} style={style} />
    </div>
  );
}

export default lottie;
