import React from "react";
import { HeaderAction } from "../../components/Navbar";
import links from "../../../types/links";

function Page() {
  return (
    <>
      <div className="mt-10">
        <HeaderAction links={links} />
      </div>
    </>
  );
}

export default Page;
