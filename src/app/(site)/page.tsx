import React from "react";
import { HeaderAction } from "../../components/Navbar";

function Page() {
  const links = [
    {
      link: "link1",
      label: "Link 1",
      links: [
        { link: "link1-1", label: "Link 1-1" },
        { link: "link1-2", label: "Link 1-2" },
      ],
    },
    {
      link: "link2",
      label: "Link 2",
      links: [
        { link: "link2-1", label: "Link 2-1" },
        { link: "link2-2", label: "Link 2-2" },
      ],
    },
  ];

  return (
    <>
      <div className="mt-10">
        <HeaderAction links={links} />
      </div>
    </>
  );
}

export default Page;
