import React from "react";

const DinoDao1 = () => {
  return (
    <section className=" relative">
      <div className="absolute flex flex-col h-full 2xl:pl-[20%] 2xl:pt-5 lg:pl-[30%] pl-5 pt-3 sm:pt-5 sm:pl-[20%] md:pt-5 md:pl-[25%] ">
        <p className="hero-title text-white 2xl:text-[130px] 2xl:pt-5 lg:text-[80px] lg:pt-5 text-[35px] sm:text-[44px] md:text-[50px]">
          DinoDAO
        </p>
        <p className="Chela-One text-white 2xl:text-[30px] lg:text-[20px] text-[10px]  ">
          2022 @copyrights DinoDAO.com
        </p>
        <p className="Chela-One text-white 2xl:text-[24px] 2xl:pt-5 lg:text-[18px] text-[10px]">
          Social network
        </p>
        <div className="flex flex-wrap items-center justify-center gap-[2vw] pt-2 text-white text-[1vw] sm:pt-3 ">
          <div className="Chela-One flex items-center 2xl:gap-[10px] lg:gap-[10px] gap-1 ">
            <img
              className=" lg:w-5 w-3"
              src="ELEMENTS.svg"
              alt="DinoDao Logo"
            />
            <a href="#" target="">
              twitter.com/DinoDao_
            </a>
          </div>
          <div className="flex Chela-One items-center 2xl:gap-[10px] lg:gap-[10px] gap-1">
            <img className=" lg:w-5 w-3" src="Vector.svg" alt="DinoDao Logo" />
            <a href="#" target="">
              t.me/DiNoDaoAnnouncement
            </a>
          </div>
          <div className="flex Chela-One items-center 2xl:gap-[10px] lg:gap-[10px] gap-1">
            <img className=" lg:w-5  w-3" src="Vector.svg" alt="DinoDao Logo" />
            <a href="#" target="">
              t.me/DiNoDaoOfficialCommunity
            </a>
          </div>
        </div>
      </div>

     
      <img
        className="w-full h-auto max-w-full"
        src="Group 23.svg"
        alt="background"
      />
    </section>
  );
};

export default DinoDao1;
