import React from "react";

const DinoDao = () => {
  return (
    <section className=" bg-heroBg bg-cover  bg-no-repeat px-4  p-2 h-screen relative">
      <div className="absolute ">
        <div className="">
          {/* <p className="absolute hero-title text-[38px]  pl-[48%] pt-3  text-[#007A2A]">
            DinoDao
          </p>
          <a className="absolute Chela-One text-[20px] pl-[64%] pt-6 ">
            About
          </a>
          <a className="absolute Chela-One text-[20px] pl-[70%] pt-6 ">
            Tokenomic
          </a>
          <a className="absolute Chela-One text-[20px] pl-[79%] pt-6 ">
            Roadmap
          </a>
          <a className="absolute Chela-One text-[20px] pl-[87%] pt-6 ">
            DinoNFT
          </a>
          <a className="absolute Chela-One text-[20px] pl-[95%] pt-6 ">
            Partnership
          </a>
          <button className="pt-6 pl-[860px]">
            <img className="" src="Group.svg" alt="background" />
          </button>
          <button className=" ">
            <img className="" src="Group 6.svg" alt="background" />
          </button> */}
        </div>
        {/* <img className="mx-auto 
        " src="Top.svg" alt="" /> */}
      </div>

      <div className=" flex flex-col items-center lg:items-center lg:justify-around pt-[8%] pl-[30%]  ">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-9xl lg:text-start m-0  text-[#007A2A]">
          DinoDao
        </h1>

        <p className=" Paytone-One text-[28px] text-[#23401C]  ">
          Our new whitepaper is here! Click the
          <br /> button to read and explore!
        </p>
        <div className="pt-5">
          <button class="Paytone-One rounded-full bg-[#007A2A]  text-white w-[151px] h-[50px] text-[29px] ">
            Join now
          </button>
        </div>
      </div>
    </section>
  );
};

export default DinoDao;
