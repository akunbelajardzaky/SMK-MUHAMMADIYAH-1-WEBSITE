import React from "react";
import Lottie from "lottie-react";

interface Props {
  text: string;
  type?: string;
  href: string;
}

const Button = (props: Props) => {
  return (
    <>
      <a href={props.href}>
        <button
          className="bg-black text-white px-3 py-2 rounded-sm hover:bg-white hover:text-black boe]
      "
        >
          {props.text}
        </button>
      </a>
    </>
  );
};

export default Button;
