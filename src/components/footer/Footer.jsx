/** @format */

import React from "react";

function Footer() {
  return (
    <section className="w-full py-3 mt-auto p-10 items-center  bg-[#000000] ">
      <div className="flex flex-row gap-11 justify-center">
        <div className="bg-blue-300 h-[150px] w-[150px]"></div>
        <div className="bg-pink-400 h-[150px] w-[150px]"></div>
        <div className="bg-yellow-200 h-[150px] w-[150px]"></div>
      </div>
      <div className="w-full py-10 h-auto md:h-auto lg:h-auto border-b-[1px] border-gray-300 grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
    </section>
  );
}

export default Footer;
