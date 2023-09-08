import React from "react";

const Tokenomics = () => {
  return (
    <section className="bg-tokenomicsBg bg-center bg-no-repeat px-4  p-2 h-screen relative">
      <div className="relative text-right mx-auto max-w-[1440px]">
        <p className="text-white text-[80px] text-center Chela-One">Tokenomics</p>
        <div className=" Paytone-One flex flex-wrap text-white text-[30px]">
          <div className="w-1/3">
            <p>
              Supply <br />
              333,333,333
            </p>
          </div>
          <div className="w-1/2 pr-[50px]">
            <p>
              Liquidity lock
              <br />
              for 1 year
            </p>
          </div>

          <div className="w-1/3 pt-[185px]">
            <p>
              Allocation
              <br />
              95% DEX Listing <br />
              5% Marketing
            </p>
          </div>
          <div className="w-1/2 pt-[195px] pr-[80px]">
            <p>
              No Mint <br />
              Function
            </p>
          </div>
        </div>
      </div>
      <div className=" Paytone-One relative text-[30px] text-white pt-[55px] pl-[200px]">
        <p>No tax</p>
      </div>
    </section>
  );
};

export default Tokenomics;
