import { getProject } from "../../../../sanity/sanity-utils";

type Props = {
  params: { content: string };
};

export default async function Project({ params }: Props) {
  const slug = params.content;
  const project = await getProject(slug);
  return <div>{project.name}</div>;
}
