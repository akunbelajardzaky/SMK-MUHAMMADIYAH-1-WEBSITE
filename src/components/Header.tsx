import React from "react";
import Image from "next/image";
import Ikj from "../assets/icon/InfoKajianJogja.svg";
import Lottie from "lottie-react";
import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";

interface Props {
  text: string;
  href: string;
}

function Header(props: Props) {
  return (
    <>
      <div className="mt-4 mr-10 ml-10 flex  justify-between mb-19">
        <Image src={Ikj} width={307} height={40} alt="Info kajian jogjakarta" />
        <div className="flex items-center justify-center">
          <div className="mr-5 ml-5 space-x-5 font-bold ">
            <button className="bg-green-900 px-3 py-2 rounded-lg hover:bg-green-700">
              Kajian
            </button>
            <button className="bg-green-900 px-3 py-2 rounded-lg hover:bg-green-700">
              Volunteering
            </button>
            <button className="bg-green-900 px-3 py-2 rounded-lg hover:bg-green-700">
              Free design
            </button>
          </div>
          <ButtonSecondary text="Donasi" href="./donasi" />
        </div>
      </div>
    </>
  );
}

export default Header;
