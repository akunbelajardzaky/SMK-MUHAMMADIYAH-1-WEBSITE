import React from "react";
import Hero from "@/components/Carousel";
import Blog from "@/components/Blog";
function page() {
  return (
    <>
      <div className="mt-10">
        <Hero />
        <Blog />
      </div>
    </>
  );
}

export default page;
