import Fiters from "@/components/Filter/fiters";
import SearchForm from "@/components/Search/searchForm";
import React from "react";

const Page = () => {
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
    </main>
  );
};

export default Page;
