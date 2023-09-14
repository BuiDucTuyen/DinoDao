import React from "react";

const About = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute w-32 right-0 top-5 sm:w-[150px] lg:w-[200px] 2xl:w-[250px]">
        <img src="frame.svg" alt="" />
      </div>
      <div className="absolute w-32 left-0 bottom-20 sm:w-[150px] lg:w-[250px] 2xl:w-[250px]">
        <img src="Default.svg" alt="" />
      </div>
      <div className="absolute    2xl:pl-[20%] 2xl:gap-[20px] xl:pt-1 xl:pl-[25%] lg:pt-16 lg:pl-[25%] md:pt-14 md:pl-[25%] sm:pt-10 sm:pl-[25%]  top-[19%] left-6 ">
        <p className="Chela-One 2xl:text-[70px] xl:text-[50px] lg:text-[45px] md:text-[30px] sm:text-[30px] text-[30px] ">
          About
        </p>
        <p className="hero-title 2xl:text-[120px] xl:text-[110px] text-[#007A2A] lg:text-[100px] md:text-[60px] sm:text-[60px] text-[40px]">
          DinoDao
        </p>
        <p className="Paytone-One 2xl:text-[25px] lg:text-[15px] md:text-[10px] xl:text-[18px] text-[10px] ">
          <span className="text-green-600">DiNO</span> is a community-driven and
          100% fairly launched defi-based
          <br /> meme token that believes in fair distribution,
          decentralization, and the
          <br />
          real-life utility.<span className="text-green-600">
            DiNO DAO
          </span>{" "}
          stands out throughits decentralization,
          <br /> agile marketing, fair distribution, and utility. It is creating
          a global
          <br /> payment network for its holders, ensuring that the users have
          no
          <br /> restrictions when it comes to shopping via{" "}
          <span className="text-green-600">DiNO</span>.
        </p>
      </div>
    </section>
  );
};

export default About;
