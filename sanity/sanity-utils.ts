import { createClient, groq } from "next-sanity";
import { Project } from "../types/project";
import ClientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "0kuojqyo",
    dataset: "production",
    apiVersion: "2023-05-28",
  });

  return client.fetch(
    groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    deskripsi,
    "slug": slug.current,
    "image" : image.asset->url,
    url,
    content,

    
  }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(ClientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    deskripsi,
    "slug": slug.current,
    "image" : image.asset->url,
    url,
    content
    
  }`,
    { slug }
  );
}
