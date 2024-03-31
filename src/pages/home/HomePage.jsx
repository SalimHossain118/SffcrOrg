/** @format */

import React from "react";
import MisVisCompo from "./MisVisCompo";

function HomePage() {
  return (
    <section className="w-full flex flex-col justify-center items-center  py-0 ">
      <div className="w-full h-[100vh] flex flex-col justify-end items-center bg-cover bg-center bg-homePageBg">
        <div className="w-full  ">
          <div className="absolute top-[80px] max-sm:ml-5 max-sm:mr-5  left-0 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-xl:w-1/3 max-lg:w-1/3 max-sm:w-full flex flex-col items-start justify-center mx-4 md:mx-10 lg:mx-10 xl:mx-20 mt-30 text-[#FFFFFF] p-3">
            <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl max-xl:text-5xl max-sm:text-[18px] sm:text-[18px] font-abelPro font-bold ">
              We are Somethings
            </h1>
            <p className="font-abelPro text-white text-base max-sm:text-[12px] sm:text-[14px] md:text-base lg:text-base sm:leading-normal leading-snug max-sm:mt-2">
              With technological advancements, businesses do not confine
              themselves to the traditional ways; credits go to the fintech
              revolution and fintech solutions! With the maturity of technology
              at an all-time high, businesses, with the help of a fintech
              consultant, are coming up with innovative ways to achieve their
              goals.
            </p>
          </div>
        </div>
      </div>
      {/* end here hero */}
      <MisVisCompo />
    </section>
  );
}

export default HomePage;
