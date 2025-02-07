import React from "react";

const CompanyStats = () => {
  return (
    <div className="bg-[#121923] flex px-6 md:px-36 py-4 justify-center items-center flex-col md:flex-row md:gap-8 gap-3 flex-wrap">
      <div className="text-white flex flex-col items-center justify-center p-4 md:p-6">
        <p className="text-[40px] md:text-[70px] font-bold leading-none">
          07<span className="text-[20px] md:text-[30px]">+</span>
        </p>
        <p className="text-white text-sm md:text-base mt-1">
          Year of experience
        </p>
      </div>

      <div className="w-[1px] h-[100px] md:block hidden bg-gradient-to-b from-[#161C26] via-[#FFFFFF] to-[#161C26]"></div>

      <div className="text-black flex flex-col items-center justify-center h-32 w-32 md:h-44 md:w-44 bg-[#FFD429] rounded-full">
        <p className="text-[40px] md:text-[70px] font-bold leading-none">
          200<span className="text-[20px] md:text-[30px]">+</span>
        </p>
        <p className="text-black text-sm md:text-base mt-1">Happy customers</p>
      </div>

      <div className="w-[1px] h-[100px] md:block hidden bg-gradient-to-b from-[#161C26] via-[#FFFFFF] to-[#161C26]"></div>

      <div className="text-white flex flex-col items-center justify-center p-4 md:p-6">
        <p className="text-[40px] md:text-[70px] font-bold leading-none">
          12<span className="text-[20px] md:text-[30px]">+</span>
        </p>
        <p className="text-white text-sm md:text-base mt-1">Expert trainers</p>
      </div>

      <div className="w-[1px] h-[100px] md:block hidden bg-gradient-to-b from-[#161C26] via-[#FFFFFF] to-[#161C26]"></div>

      <div className="text-white flex flex-col items-center justify-center p-4 md:p-6">
        <p className="text-[40px] md:text-[70px] font-bold leading-none">
          1M<span className="text-[20px] md:text-[30px]">+</span>
        </p>
        <p className="text-white text-sm md:text-base mt-1">
          YouTube followers
        </p>
      </div>
    </div>
  );
};

export default CompanyStats;
