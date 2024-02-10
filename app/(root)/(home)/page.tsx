import Fiters from "@/components/Filter/fiters";
import SearchForm from "@/components/Search/searchForm";
import { getResources } from "@/sanity/actions";
import React from "react";

const Page = async () => {

  const resources = await getResources({
    query : '',
    category : '',
    page : '1'
  })

  console.log({resources , message : "Fetching data... "})
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
        <h2>Header</h2>
        <div  className="mt-12 flex w-full flex-wrap justify-center sm:justify-start">
          {resources?.length > 0  ? resources.map((resource : object , i : number) => (
            <h1 key={i}>Hello There</h1>
          )) : (
            <p>no resource found</p>
          ) }
        </div>

      </section>
    </main>
  );
};

export default Page;
