import React from "react";
import Image from "next/image";
import Ikj from "../assets/icon/ikj.svg";

export default function Logo() {
  return (
    <Image src={Ikj} width={87} height={87} alt="Info kajian jogjakarta" />
  );
}
