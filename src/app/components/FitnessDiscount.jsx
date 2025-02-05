import Image from "next/image";
import React from "react";

const FitnessDiscount = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Content */}
      <div className=" flex items-center w-full bg-[#121923] md:flex-nowrap flex-wrap gap-4 md:p-0 p-8">
        {/* Image Side */}
        <div className="md:w-1/2 w-full">
          <img
            src="/Images/image 3.png"
            alt="Fitness"
            className=" w-full h-auto object-cover opacity-25"
          />
        </div>

        <div className="md:w-1/2 w-full text-white space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get <span className="text-[#FFD429]">20%</span> Discount For All{" "}
            <br /> Fitness Classes
          </h2>
          <p className="text-sm md:text-base text-gray-300 font-inter">
            Nulla Facilisi. Hustle Hard, Recover Smart, And Stay Focused On Your
            Fitness Journey. Achieve Goals Step By Step, One Rep At A Time.
          </p>
          <button className="flex items-center gap-2 bg-[#FFD429] text-black px-5 py-2 rounded-[10px] font-semibold hover:bg-yellow-500">
            <span>
              <Image
                src="/Icons/Calling 1.svg"
                height="20"
                width="20"
                alt="logo"
              />{" "}
            </span>{" "}
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default FitnessDiscount;
