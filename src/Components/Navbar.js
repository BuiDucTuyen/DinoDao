import React from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="absolute pt-2 left-0 top-0 z-50 w-full mx-auto right-0 px-8 sm:px-10 md:px-[60px] lg:px-[80px] 2xl:px-[14%]">
      <div className="flex items-center justify-center bg-white rounded-2xl px-1  py-1  h-[5vw] gap-1 sm:gap-3 lg:px-5 lg:gap-4 xl:gap-4 2xl:gap-4 2xl:px-2">
        <p className="hero-title text-[15px] sm:text-[25px] md:text-[28px] lg:text-[35px] xl:text-[50px] 2xl:text-[65px]   text-[#007A2A]">
          DinoDao
        </p>
        <ul className="flex items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-7 2xl:gap-3">
          <li className="Chela-One text-[5px] sm:text-[15px] md:text-[18px] lg:text-[22px] xl:text-[25px] 2xl:text-[30px]">
            <a href="#">About</a>
          </li>
          <li className="Chela-One text-[5px]  sm:text-[15px] md:text-[18px] lg:text-[22px] xl:text-[25px] 2xl:text-[30px]">
            <a href="#">Tokenomic</a>
          </li>
          <li className="Chela-One text-[5px]  sm:text-[15px] md:text-[18px] lg:text-[22px] xl:text-[25px] 2xl:text-[30px]">
            <a href="#">Roadmap</a>
          </li>
          <li className="Chela-One text-[5px] sm:text-[15px] md:text-[18px] lg:text-[22px] xl:text-[25px] 2xl:text-[30px]">
            <a href="#">DinoNTF</a>
          </li>
          <li className="Chela-One text-[5px] sm:text-[15px] md:text-[18px] lg:text-[22px] xl:text-[25px] 2xl:text-[30px]">
            <a href="#">Partnership</a>
          </li>
          <li>
            <a href="#">
              <img
                className="w-20 sm:w-16 lg:w-[90px] xl:w-[100px] 2xl:w-[120px]"
                src="Group.svg"
                alt="background"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="w-20 sm:w-16 lg:w-[90px] xl:w-[100px] 2xl:w-[120px]"
                src="Group 6.svg"
                alt="background"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
