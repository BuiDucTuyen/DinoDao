import React from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="absolute pt-10 left-0 top-0 z-50 w-full md:w-[50%] mx-auto right-0 px-4">
      <div className="flex items-center bg-white rounded-2xl px-5 md:px-10 py-4 md:py-6 h-[8vw] md:h-[60px] gap-4 md:gap-6">
        <p className="hero-title text-[8vw] md:text-[40px] text-[#007A2A]">
          DinoDao
        </p>
        <ul className="md:flex items-center gap-4 hidden">
          <li className="Chela-One text-[4vw] md:text-[22px]">About</li>
          <li className="Chela-One text-[4vw] md:text-[22px]">Tokenomic</li>
          <li className="Chela-One text-[4vw] md:text-[22px]">Roadmap</li>
          <li className="Chela-One text-[4vw] md:text-[22px]">DinoNFT</li>
          <li className="Chela-One text-[4vw] md:text-[22px]">Partnership</li>
          <li>
            <button>
              <img src="Group.svg" alt="background" />
            </button>
          </li>
          <li>
            <button>
              <img src="Group 6.svg" alt="background" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
