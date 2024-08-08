import React from "react";

const About = () => {
  return (
    <div>
      <div className="container mx-auto relative" id="about">
        {/* The new div that will appear on the left of the image */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 lg:-translate-y-36 z-10 flex items-center px-4 sm:px-8 md:px-16 lg:pl-96">
          <div className="max-w-full lg:max-w-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-black">
              About Me
            </h2>
            <p className="mt-2 text-gray-500 text-sm sm:text-base lg:w-80">
              I am Sujan Shrestha, a front-end developer with a passion for
              creating interactive and responsive user interfaces.
            </p>
            <p className="mt-2 text-black text-sm sm:text-base lg:w-96">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              eligendi cumque veritatis delectus magnam placeat quisquam illum
              atque deleniti aut. Eligendi, fuga temporibus quam provident earum
              amet corrupti ut fugiat ab. Natus ratione dolor nobis sunt
              quisquam temporibus harum itaque.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/images/About.png"
            alt=""
            className="max-w-full h-auto lg:w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
