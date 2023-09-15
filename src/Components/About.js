import React from "react";

const About = () => {
  return (
    <section className="bg-aboutBg bg-no-repeat bg-contain h-screen ">
      <div className="pt-[20%]">
        <p className="Chela-One text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[75px]">
          About
        </p>
        <p className="hero-title text-[55px] text-[#007A2A] sm:text-[60px] lg:text-[70px] xl:text-[90px] 2xl:text-[100px]">
          DinoDao
        </p>
        <p className="Paytone-One text-[10px] sm:text-[12px] lg:text-[15px] xl:text-[20px] 2xl:text-[25px]">
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
