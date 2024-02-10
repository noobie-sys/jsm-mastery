"use client";
import { formUrlQuery } from "@/sanity/utils";
import { useSearchParams , useRouter } from "next/navigation";
import React, { useState } from "react";


const links = [ "All" ,"Next 13", "Frontend", "Backend", "Fullstack", "Tailwind"];
const Fiters = () => {
    const [active , setActive] = useState("");
    const searchParams = useSearchParams()
    const router = useRouter()
    const handelFilters = (link:string) => {
      let newUrl = ""

      if(active === link) {

        setActive('');

        newUrl = formUrlQuery({
          params : searchParams.toString() ,
          key : 'category',
          value : null
  
        })
      }else {
        setActive(link)
        newUrl = formUrlQuery({
          params : searchParams.toString() ,
          key : 'category',
          value : link.toLowerCase()
  
        })
      }
      
     router.push(newUrl , {scroll : false})


    }
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full m-w-full gap-2 overflow-auto p-12 sm:max-w-2xl">
      {links.map((link, i) => (
        <button key={link} onClick={() => handelFilters(link)}
        className={` ${active === link ? "gradient_blue-purple" : ""}   whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Fiters;
