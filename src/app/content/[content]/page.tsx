import { PortableTextInput } from "sanity";
import { getProject } from "../../../../sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { content: string };
};

export default async function Project({ params }: Props) {
  const slug = params.content;
  const project = await getProject(slug);
  return (
    <div>
      <h1>{project.name}</h1>

      <a
        href={project.url}
        title="Vieww"
        target="_blank"
        rel="noopener noreferrer"
      >
        kalo di klik ngarah ke url
      </a>
      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          width={250}
          height={100}
          className="object-cover rounded-lg border border-gray-500"
        />
      )}
      <div>
        <PortableText value={project.content} />
      </div>
    </div>
  );
}
