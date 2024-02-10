import ResourceCard from "@/components/Card/ResourceCard";
import Fiters from "@/components/Filter/fiters";
import Header from "@/components/Header/Header";
import SearchForm from "@/components/Search/searchForm";
import { getResources, getResourcesPlaylist } from "@/sanity/actions";
import React, { useState } from "react";

export const revalidate = 500;

interface Props {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const Page = async ({ searchParams }: Props) => {
  // const [loading , setLoading ] = useState<boolean>(false)
  const resources = await getResources({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });

  const resourcePlaylists = await getResourcesPlaylist() 

  

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col text-white">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover">
          <h1 className="sm:heading2 heading1 mb-6 text-center text-white capitalize">
            Javascript Mastery resouces
          </h1>
        </div>
        <SearchForm />
      </section>
      <Fiters />
      {(searchParams?.category || searchParams?.query) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header
            type={resources}
            query={searchParams?.query || ""}
            category={searchParams?.category || ""}
          />
          <div className="mt-12 flex w-full flex-wrap justify-center sm:justify-start ">
            {resources?.length > 0 ? (
              resources.map((resource: any, i: number) => (
                <ResourceCard
                  key={i}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                />
              ))
            ) : (
              <p>no resource found</p>
            )}
          </div>
        </section>
      )}

      {
        resourcePlaylists.map((item : any) => (
          <section key={item._id} className="flex-center mt-6 w-full flex-col sm:mt-20 ">
            <h1 className="heading3 self-start text-white-800">{item.title}</h1>
            <div className="mt-12 flex-wrap justify-center flex w-full gap-16 sm:justify-start">
              {
                item.resources.map((resource: any, i: number) => (
                  <ResourceCard
                    key={i}
                    title={resource.title}
                    id={resource._id}
                    image={resource.image}
                    downloadNumber={resource.views}
                    downloadLink={resource.downloadLink}
                  />
                ))
              }
            </div>
          </section>
        ))
      }
    </main>
  );
};

export default Page;
