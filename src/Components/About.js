import React from "react";

const About = () => {
  return (
    <section className="relative">
      <div className="absolute flex flex-col h-full 2xl:pt-[5%] 2xl:pl-[25%] 2xl:gap-[20px] xl:pt-[8%] xl:pl-[30%] lg:pt-16 lg:pl-[25%] md:pt-14 md:pl-[25%] sm:pt-10 sm:pl-[25%]  pt-5 pl-5">
        <p className="Chela-One 2xl:text-[80px] xl:text-[50px] lg:text-[45px] md:text-[30px] sm:text-[25px] text-[20px] ">
          About
        </p>
        <p className="hero-title 2xl:text-[140px] xl:text-[110px] text-[#007A2A] lg:text-[100px] md:text-[60px] sm:text-[50px] text-[30px]">
          DinoDao
        </p>
        <p className="Paytone-One 2xl:text-[25px] lg:text-[15px] md:text-[10px] xl:text-[18px] text-[1px] ">
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

      <img
        className=" mx-auto my-auto w-full "
        src="Group 8.svg"
        alt="background"
      />
    </section>
  );
};

export default About;
