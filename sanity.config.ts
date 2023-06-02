import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "0kuojqyo",
  dataset: "production",
  title: "SMK MUHAMMADIYAH 1",
  apiVersion: "2023-05-28",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
