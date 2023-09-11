import React from "react";

const Tokenomics = () => {
  return (
    <section className="bg-tokenomicsBg bg-cover bg-no-repeat px-4  p-2 h-screen relative">
      <div className="relative text-right mx-auto ">
        <p className="text-white text-[80px] text-center Chela-One">
          Tokenomics
        </p>
        <div className=" Paytone-One flex flex-wrap text-white text-[30px] pt-5  ">
          <div className="w-1/3 pt-36">
            <div className="flex flex-col  ">
              <div>
                <p className="">
                  Supply <br />
                  333,333,333
                </p>
              </div>
              <div className="pt-[305px]">
                <p className="">
                  Allocation
                  <br />
                  95% DEX Listing <br />
                  5% Marketing
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 pt-96">
          <p className="mt-[415px]">
                  No Tax
                </p>
          </div>
          <div className="w-1/3 pt-36 ">
            <div className="flex flex-col mr-72 ">
              <div>
                <p className="">
                  Liquidity lock <br /> for 1 year
                </p>
              </div>
              <div className="pt-[320px]">
                <p className="">
                  No Mint <br /> Function
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
