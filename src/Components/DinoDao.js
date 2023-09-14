import React from "react";

const DinoDao = () => {
  return (
    <section className=" relative">

      <div className="absolute flex flex-col items-center   pl-[30%] pt-9 sm:pt-14 sm:pl-[40%] lg:pt-20 xl:pt-[10%] ">
        <h1 className="hero-title text-4xl  text-[#007A2A] sm:text-6xl lg:text-8xl xl:text-9xl">
          DinoDao
        </h1>

        <p className=" Paytone-One text-[5px] text-[#23401C] sm:text-[13px] lg:text-[20px] xl:text-[25px] ">
          Our new whitepaper is here! Click the
          <br /> button to read and explore!
        </p>
        <div className="pt-1">
          <button class="Paytone-One rounded-full bg-[#007A2A]  text-white w-[50px] h-[18px] text-[5px] lg:text-[12px] lg:w-16 xl:w-[80px] xl:h-[25px]">
            Join now
          </button>
        </div>
      </div>
       <img
        className="w-full h-auto max-w-full"
        src="Group 7.svg"
        alt="background"
      />
    </section>
  );
};

export default DinoDao;
