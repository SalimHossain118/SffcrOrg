import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="relative w-full min-h-screen -mt-56">
        <video
          className=" w-[100vw] h-[100vh] object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://themarkfoundation.org/wp-content/uploads/2023/11/home-bg.mp4"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-white gap-5 mt-40">
          <h1 className="text-4xl w-1/2 max-md:w-full text-center">
            Accelerating the next generation of revolutionary cancer research.
          </h1>
          <h5 className=" w-1/2 text-center max-sm:w-full">
            The Mark Foundation for Cancer Research funds groundbreaking science
            across all cancer types through grants to individual investigators
            and multi-disciplinary teams, as well as venture investment in
            early-stage companies.
          </h5>
          <div className=" w-1/2 max-sm:w-full text-center px-10 py-2 bg-[#1F98B5] rounded-full text-xl font-semibold hover:text-[#00159E]">
            <Link>
              We are now accepting letters of intent for the Emerging Leader
              Award. Click here to learn more.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
