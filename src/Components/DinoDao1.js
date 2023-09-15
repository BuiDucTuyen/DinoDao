import React from "react";

const DinoDao1 = () => {
  return (
    <section className="bg-endBg bg-no-repeat h-screen bg-center">
      <div className="pt-[20%] ">
        <p className="hero-title text-white text-[60px]">DinoDao</p>
        <p className="Chela-One text-white text-[20px]">
          2022 @copyrights DinoDAO.com
        </p>
        <p className="Chela-One text-white text-[20px]">Social network</p>
        <div className="flex flex-col items-center justify-center  text-white   ">
          <div className="Chela-One flex items-center gap-2 ">
            <img className="w-5 " src="ELEMENTS.svg" alt="DinoDao Logo" />
            <a href="#" target="">
              twitter.com/DinoDao_
            </a>
          </div>
          <div className="flex Chela-One items-center gap-2">
            <img className="w-5 " src="Vector.svg" alt="DinoDao Logo" />
            <a href="#" target="">
              t.me/DiNoDaoAnnouncement
            </a>
          </div>
          <div className="flex Chela-One items-center  gap-2">
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
