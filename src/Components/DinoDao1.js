import React from "react";

const DinoDao1 = () => {
  return (
    <section className="bg-endBg bg-no-repeat h-screen bg-top 2xl:bg-cover">
      <div className="pt-[20%] lg:pt-[10%] xl:pt-[5%]">
        <p className="hero-title text-white text-[60px] sm:text-[70px] lg:text-[90px] xl:text-[100px] 2xl:text-[120px]">
          DinoDao
        </p>
        <p className="Chela-One text-white text-[20px] lg:text-[28px] xl:text-[30px]">
          2022 @copyrights DinoDAO.com
        </p>
        <p className="Chela-One text-white pt-2 text-[20px]  lg:text-[22px] xl:text-[25px]">
          Social network
        </p>
        <div className="flex flex-col items-center justify-center  text-white  gap-1 pt-2 xl:gap-3 xl:pt-3">
          <div className="Chela-One flex items-center gap-2 text-[15px] lg:text-[20px] xl:text-[25px]">
            <img className="w-5 " src="ELEMENTS.svg" alt="DinoDao Logo" />
            <a href="#" target="">
              twitter.com/DinoDao_
            </a>
          </div>
          <div className="flex Chela-One items-center gap-2 text-[15px] lg:text-[20px] xl:text-[25px]">
            <img className="w-5 " src="Vector.svg" alt="DinoDao Logo" />
            <a href="#" target="">
              t.me/DiNoDaoAnnouncement
            </a>
          </div>
          <div className="flex Chela-One items-center  gap-2 text-[15px] lg:text-[20px] xl:text-[25px]">
            <img className="   w-5" src="Vector.svg" alt="DinoDao Logo" />
            <a href="#" target="">
              t.me/DiNoDaoOfficialCommunity
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DinoDao1;
