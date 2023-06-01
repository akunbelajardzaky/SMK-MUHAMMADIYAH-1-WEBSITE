import { PortableTextInput } from "sanity";
import { getProject } from "../../../../../sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { content: string };
};

export default async function Project({ params }: Props) {
  const slug = params.content;
  const project = await getProject(slug);
  return (
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8  text-black">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {project.name}
          </h1>
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={250}
              height={100}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
            <div className="flex items-center md:space-x-2"></div>
          </div>
        </div>
        <div className="text-black">
          <PortableText value={project.content} />
        </div>
      </article>
      <div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Rangkuman</h4>
          <ul className="ml-4 space-y-1 list-disc">
            <li>
              <a
                href={project.url}
                title="Vieww"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
