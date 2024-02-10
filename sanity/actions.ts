import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface getResorceParams {
  query: string;
  category: string;
  page: string;
}

export const getResources = async (params: getResorceParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "resource",
        query,
        category,
        page: parseInt(page),
      })}{
        title ,
        _id,
        downloadLink,
        "image":poster.asset->url,
        slug,
        views,
        category
      }`
       
    );
    return resources
  } catch (er) {
    console.log({message : er})
  }
};
