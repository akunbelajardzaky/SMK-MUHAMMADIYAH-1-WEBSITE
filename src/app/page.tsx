import React from "react";
import Navbar from "../components/Navbar/App";
import { HeroBullets } from "./Hero";
import Blog from "./blog";
import Statistic from "../components/stats/app";
import Fotter from "../components/fotter/app";

import Image from "next/image";
import Link from "next/link";
import { getProjects } from "../../sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <Navbar />
      <HeroBullets />
      <Statistic />
      <>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-6">
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <a
                  key={project._id}
                  rel="noopener noreferrer"
                  href={`/content/${project.slug}`}
                  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 sm:block"
                >
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={480}
                      height={360}
                      quality={4}
                      className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    />
                  )}
                  <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      {project.name}
                    </h3>
                    <span className="text-xs dark:text-gray-400">
                      {/* {project._createdAt} */}
                    </span>
                    <p>{project.deskripsi}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </>
      <Fotter />
    </>
  );
}
