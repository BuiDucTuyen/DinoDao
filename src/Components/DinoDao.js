import React from "react";

const DinoDao = () => {
  return (
    <section className=" bg-heroBg bg-cover bg-no-repeat px-4  p-2 h-screen relative">
      <div className="relative">
        <div className="absolute">
          <p className="absolute hero-title text-[38px]  pl-[230px] pt-3  text-[#007A2A]">
            DinoDao
          </p>
          <a className="absolute Chela-One text-[20px] pl-[400px] pt-6 pl-">
            About
          </a>
          <a className="absolute Chela-One text-[20px] pl-[470px] pt-6 pl-">
            Tokenomic
          </a>
          <a className="absolute Chela-One text-[20px] pl-[580px] pt-6 pl-">
            Roadmap
          </a>
          <a className="absolute Chela-One text-[20px] pl-[670px] pt-6 pl-">
            DinoNFT
          </a>
          <a className="absolute Chela-One text-[20px] pl-[755px] pt-6 pl-">
            Partnership
          </a>
          <button className="pt-6 pl-[860px]">
            <img className="" src="Group.svg" alt="background" />
          </button>
          <button className=" ">
            <img className="" src="Group 6.svg" alt="background" />
          </button>
        </div>
        <img className="pl-[200px]" src="Top.svg" alt="" />
      </div>

      <div className=" relative text-right mx-auto max-w-[1440px]">
        <p className="hero-title text-[120px] pt-28 pr-64  text-[#007A2A]">
          DinoDao
        </p>
        <p className=" Paytone-One text-[25px] text-center pl-96  ">
          Our new whitepaper is here! Click the
          <br /> button to read and explore!
        </p>
        <button class="Paytone-One rounded-full bg-[#007A2A] mt-10 mr-96   text-white w-[151px] h-[50px] text-[29px] ">
          Join now
        </button>
      </div>
    </section>
  );
};

export default DinoDao;
