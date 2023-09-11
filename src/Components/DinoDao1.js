import React from "react";

const DinoDao1 = () => {
  return (
    <section className=" bg-endBg bg-cover bg-no-repeat px-4 p-2 h-screen relative">
      <div className="relative  mx-auto text-center ">
        <p className="hero-title text-[140px]  pt-16 text-white">DinoDao</p>
        <p className="Chela-One text-[25px] text-center  text-white">
          2022 @copyrights DinoDAO.com
        </p>
        <p className="Chela-One text-[20px] pt-7 text-center  text-white">
          Social network
        </p>
        <div className="flex flex-wrap items-center justify-center gap-[100px] pt-14 text-white text-[18px]">
          <div className=" Chela-One flex items-center gap-2">
            <img className="pl-[20px]" src="ELEMENTS.svg" alt="DinoDao Logo" />
            <a href="https://twitter.com/DinoDao_" target="_blank">
              twitter.com/DinoDao_
            </a>
          </div>
          <div className="flex Chela-One items-center gap-2">
            <img className="pl-[20px]" src="Vector.svg" alt="DinoDao Logo" />
            <a href="https://twitter.com/DinoDao_" target="_blank">
              t.me/DiNoDaoAnnouncement
            </a>
          </div>
          <div className="flex Chela-One items-center gap-2">
            <img className="pl-[20px]" src="Vector.svg" alt="DinoDao Logo" />
            <a href="https://twitter.com/DinoDao_" target="_blank">
              t.me/DiNoDaoOfficialCommunity
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DinoDao1;
