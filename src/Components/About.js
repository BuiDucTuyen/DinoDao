import React from "react";

const About = () => {
  return (
    <section className="bg-aboutBg bg-no-repeat bg-center md:bg-cover px-4 p-2 h-screen relative">
      <div className="relative text-center mx-auto">
        <p className="Chela-One text-[8vw] md:text-[80px] pt-14 flex justify-center mx-auto">
          About
        </p>
        <p className="hero-title text-[12vw] md:text-[120px] pt-14 flex justify-center text-[#007A2A]">
          DinoDao
        </p>
        <p className="Paytone-One text-[2vw] md:text-[20px] text-center pt-20">
          <span className="text-green-600">DiNO</span> is a community-driven and
          100% fairly launched defi-based
          <br /> meme token that believes in fair distribution,
          decentralization, and the <br /> real-life utility.{" "}
          <span className="text-green-600">DiNO DAO</span> stands out through
          its decentralization,
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
