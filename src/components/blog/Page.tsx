"use client";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { PortableTextInput } from "sanity";
import React from "react";

export default async function Home() {
  const projects = await getProjects();

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-6">
        {/* <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 sm:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              Pofil sekolah
            </h3>
            <span className="text-xs dark:text-gray-400">
              February 19, 2021
            </span>
            <p>
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>
          </div>
        </a> */}

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
  );
}
