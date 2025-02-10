import React from "react";

const CompanyStats = () => {
  return (
    <div className="bg-[#121923] flex px-6 md:px-36 py-4 justify-center items-center flex-col md:flex-row md:gap-8 gap-3 flex-wrap">
      <div className="text-white hover:text-black hover:bg-[#FFD429] flex flex-col items-center justify-center h-32 w-32 md:h-[200px] md:w-[200px] p-8 rounded-full">
        <p className="text-[40px] md:text-[60px] font-bold leading-none">
          07<span className="text-[20px] font-normal md:text-[30px]">+</span>
        </p>
        <p className=" hover:text-black text-xs md:text-sm mt-1">
          Year of experience
        </p>
      </div>

      <div className="w-[1px] h-[100px] md:block hidden bg-gradient-to-b from-[#161C26] via-[#FFFFFF] to-[#161C26]"></div>

      <div className="hover:text-black flex flex-col items-center justify-center h-32 w-32 md:h-[200px] md:w-[200px] hover:bg-[#FFD429] rounded-full p-8">
        <p className="text-[40px] md:text-[60px] font-bold leading-none">
          200<span className="text-[20px] font-normal md:text-[30px]">+</span>
        </p>
        <p className="hover:text-black text-xs md:text-sm mt-1">Happy customers</p>
      </div>

      <div className="w-[1px] h-[100px] md:block hidden bg-gradient-to-b from-[#161C26] via-[#FFFFFF] to-[#161C26]"></div>

      <div className="text-white flex flex-col items-center hover:text-black hover:bg-[#FFD429] justify-center h-32 w-32 md:h-[200px] md:w-[200px] rounded-full p-8">
        <p className="text-[40px] md:text-[60px] font-bold leading-none">
          12<span className="text-[20px] font-normal md:text-[30px]">+</span>
        </p>
        <p className=" hover:text-black text-xs md:text-sm mt-1">Expert trainers</p>
      </div>

      <div className="w-[1px] h-[100px] md:block hidden bg-gradient-to-b from-[#161C26] via-[#FFFFFF] to-[#161C26]"></div>

      <div className="text-white flex flex-col items-center justify-center  hover:text-black hover:bg-[#FFD429] h-32 w-32 md:h-[200px] md:w-[200px] rounded-full p-8">
        <p className="text-[40px] md:text-[60px] font-bold leading-none">
          1M<span className="text-[20px] font-normal md:text-[30px]">+</span>
        </p>
        <p className=" hover:text-black text-xs md:text-sm mt-1">
          YouTube followers
        </p>
      </div>
    </div>
  );
};

export default CompanyStats;
