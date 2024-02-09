"use client";
import React, { useState } from "react";

const links = ["Next 13", "Frontend", "Backend", "Fullstack"];
const Fiters = () => {
    const [active , setActive] = useState("");
    const handelFilters = (link:string) => {
        setActive(link)
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
