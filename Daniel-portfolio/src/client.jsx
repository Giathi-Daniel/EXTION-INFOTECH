import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = "id7zsgea";
const dataset = "production";
const apiVersion = "2022-02-01";
const useCdn = true;
const token = process.env.REACT_APP_SANITY_TOKEN;
  
if (!projectId || !token) {
  throw new Error("Missing required environment variables");
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);