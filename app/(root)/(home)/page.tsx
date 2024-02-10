import ResourceCard from "@/components/Card/ResourceCard";
import Fiters from "@/components/Filter/fiters";
import Header from "@/components/Header/Header";
import SearchForm from "@/components/Search/searchForm";
import { getResources } from "@/sanity/actions";
import React from "react";

export const revalidate = 900;

interface Props {
  searchParams : {
    [key : string] : string | undefined
  }
}

const Page = async ({searchParams} : Props) => {

  const resources = await getResources({
    query : '',
    category : searchParams?.category || '',
    page : '1'
  })

  console.log({...resources , message : "Data fetching..."})

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col ">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover">
          <h1 className="sm:heading2 heading1 mb-6 text-center text-white capitalize">
            Javascript Mastery resouces
          </h1>
        </div>
        <SearchForm />
      </section>
      <Fiters />

      <section className="flex-center mt-6 w-full flex-col sm:mt-20">
        <Header />
        <div  className="mt-12 flex w-full flex-wrap justify-center sm:justify-start ">
          {resources?.length > 0  ? resources.map((resource : any, i : number) => (
           <ResourceCard key={i} 
            title ={resource.title}
            id = {resource._id}
            image = {resource.image}
            downloadNumber={resource.views}

           />
          )) : (
            <p>no resource found</p>
          ) }
        </div>

      </section>
    </main>
  );
};

export default Page;
