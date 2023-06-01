"use client";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { PortableTextInput } from "sanity";

export default async function Home() {
  const project = await getProjects();
  return (
    <div className="justify-between space-x-12 grid grid-cols-3 gap-12 ml-[428px] md:ml-0 mr-[428px] md:mr-0">
      {project.map((project) => (
        <Link href={`/content/${project.slug}`} key={project._id}>
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className="h-56 w-full object-cover"
              />
            )}
            <div className="bg-white p-4 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                Taanggal nya belum dinamisss
              </time>
              {/*  */}
              <h3 className="mt-0.5 text-lg text-gray-900">{project.name}</h3>
              {/*  */}
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                <PortableText value={project.content} />
              </p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
