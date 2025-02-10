import Image from "next/image";
import React from "react";

const WelcomePage = () => {
  return (
    <div className="bg-[#161E2A] container mx-auto relative p-5 flex flex-col justify-center items-center gap-5">
      <h5 className="text-[#FFD429] font-inter font-bold sm:text-lg text-base z-10">
        Welcome To IRONX Gym Fitness
      </h5>
      <h3 className="text-center text-[#FFFFFF] font-bold font-inter sm:text-4xl text-2xl capitalize z-10">
        Lift heavy, push limits, and stay strong. <br /> Proin eleifend purus
        augue semper fit. <br /> Train hard, repeat daily, and build the best
        version of <br />
        yourself.
      </h3>
      <h6 className="text-[#E6E6E6] z-20 font-medium capitalize font-inter sm:text-base text-sm text-center">
        Nulla facilisi. Hustle hard, recover smart, and stay focused on your
        fitness journey. Achieve goals step by step,
        <br /> one rep at a time. Stronger every day, both in body and in mind.
      </h6>
      <div className="flex items-center justify-center z-10">
        <Image
          src="/Images/signature (2).svg"
          height="45"
          width="170"
          alt="search"
        />
      </div>
      <p className="font-inter font-medium gap-2 sm:text-base text-sm text-center z-10">
        Ashton Mavrek -{" "}
        <span className="text-[#E6E6E6] font-medium text-xs">GYM Trainer</span>
      </p>

      <div
        className="absolute -top-2 right-[25px] h-[440px] w-[410px]  bg-no-repeat bg-center bg-cover z-0"
        style={{ backgroundImage: "url('/Images/Vector 2 (1).svg')" }}
      ></div>

      {/* Bottom Right Vector */}
      <div
        className="absolute -bottom-7 right-0 w-[200px] h-[150px] bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/Images/Vector 3 (1).svg')" }}
      ></div>
    </div>
  );
};

export default WelcomePage;
