import React from "react";

const DinoDao = () => {
  return (
    <section className="bg-heroBg bg-no-repeat bg-top 2xl:bg-cover h-screen ">
      <div className="pt-[40%] sm:pt-[30%] md:pt-[25%] lg:pt-[18%] xl:pt-[12%]">
        <p className=" hero-title text-[#007A2A] text-[60px] sm:text-[70px] md:text-[75px] lg:text-[80px] xl:text-[90px] 2xl:text-[150px]">
          DinoDao
        </p>
        <p className=" Paytone-One text-[#23401C] text-[15px] lg:text-[20px] 2xl:text-[30px]">
          Our new whitepaper is here! Click the <br /> button to read and
          explore!
        </p>
        <div className="pt-3 2xl:pt-5">
          <button class="Paytone-One rounded-full bg-[#007A2A]  text-white w-[80px] h-[30px] text-[15px] 2xl:w-[110px] 2xl:h-[40px] 2xl:text-[20px] ">
            Join now
          </button>
        </div>
      </div>
    </section>
  );
};

export default DinoDao;
