import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div
        className="relative flex min-h-screen items-end justify-center"
        id="hero"
      >
        <img
          src="/images/Profile.jpeg"
          alt=""
          className="absolute inset-0 z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-transparent-60% to-black"></div>
        <div className="z-30 mx-4 max-w-3xl pb-20">
          <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
            Sujan Shrestha
          </h1>
          <p className="pt-2 ">
            A front-end developer with a flair for UI/UX designing
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
