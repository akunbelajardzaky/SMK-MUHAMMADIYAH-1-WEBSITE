"use client";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "../../../../sanity/sanity-utils";

export default async function Home() {
  const project = await getProjects();
  return (
    <div className="max-w-5xl mx-auto py-20 ml-3 mr-3 items-center justify-center">
      <h1 className="text-7xl font-extrabold">Muhi elite</h1>

      <p className="mt-3 mb-3 text-xl text-gray-600">
        Haloo semua aku adalah fullstack web developer
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl mb-20">
        Kajian bree
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {project.map((project) => (
          <Link
            href={`/content/${project.slug}`}
            key={project._id}
            className="border border-gray-500 rounded-lg p-3 hover:scale-150 hover:border-blue-500 transition"
          >
            {/* Cara menambahkan gambar dari sanity ke Next 13 */}
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            {/*  End Cara menambahkan gambar dari sanity ke Next 13 */}

            <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">
              {" "}
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
