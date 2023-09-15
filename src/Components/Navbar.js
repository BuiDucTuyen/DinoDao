import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute pt-1 lg:pt-10 z-50 w-full right-0 px-10 py-10  flex justify-center items-center ">
      <div className="relative flex flex-wrap items-center gap-10 2xl:gap-12 lg:gap-4  bg-white rounded-2xl px-10 w-full justify-center">
        <a
          href="#"
          className="hero-title text-[#007A2A] text-3xl xl:text-[40px] 2xl:text-[50px]"
        >
          DinoDao
        </a>
        <div className="lg:hidden">
          <FiMenu
            className="text-[#007A2A] text-3xl cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <ul className="hidden h-full lg:flex lg:items-center lg:w-auto lg:shadow-none">
          <li className="Chela-One text-[20px] xl:text-[25px] lg:pl-2 xl:pl-2 2xl:text-[30px]">
            <a href="#">About</a>
          </li>
          <li className="Chela-One text-[20px] xl:text-[25px]  lg:pl-5 xl:pl-4 2xl:text-[30px]">
            <a href="#">Tokenomic</a>
          </li>
          <li className="Chela-One text-[20px] xl:text-[25px]  lg:pl-5 xl:pl-4 2xl:text-[30px]">
            <a href="#">Roadmap</a>
          </li>
          <li className="Chela-One text-[20px] xl:text-[25px] lg:pl-5 xl:pl-4 2xl:text-[30px]">
            <a href="#">DinoNTF</a>
          </li>
          <li className="Chela-One text-[20px] xl:text-[25px] lg:pl-5 xl:pl-4 2xl:text-[30px]">
            <a href="#">Partnership</a>
          </li>
          <li className="lg:pl-5 xl:pl-4 ">
            <a href="#">
              <img
                className="w-20 2xl:w-[90px] "
                src="Group.svg"
                alt="background"
              />
            </a>
          </li>
          <li className="lg:pl-5 xl:pl-4">
            <a href="#">
              <img className="w-20 " src="Group 6.svg" alt="background" />
            </a>
          </li>
        </ul>

        <div
          className={`${
            open ? "h-fit opacity-100 z-10" : "h-0 opacity-0 z-[-1]"
          } absolute bg-white left-0 top-10 w-full`}
        >
          <ul className="">
            <li className="Chela-One text-[20px] lg:pl-2 xl:pl-2">
              <a href="#">About</a>
            </li>
            <li className="Chela-One text-[20px]  lg:pl-2 xl:pl-4">
              <a href="#">Tokenomic</a>
            </li>
            <li className="Chela-One text-[20px]  lg:pl-2 xl:pl-4">
              <a href="#">Roadmap</a>
            </li>
            <li className="Chela-One text-[20px] lg:pl-2 xl:pl-4">
              <a href="#">DinoNTF</a>
            </li>
            <li className="Chela-One text-[20px] lg:pl-2 xl:pl-4">
              <a href="#">Partnership</a>
            </li>
            <li className="Chela-One text-[20px] lg:pl-2 xl:pl-4">
              <a href="#">Twitter</a>
            </li>
            <li className="Chela-One text-[20px] lg:pl-2 xl:pl-4">
              <a href="#">Telegram</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
