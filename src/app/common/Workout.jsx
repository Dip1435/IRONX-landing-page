import Image from "next/image";
import React from "react";

const Workout = ({ main, name, second, style, training }) => {
  return (
    <div className={style}>
      <Image src={main} height="180" width="130" alt="logo" className="h-fit" />
      <div className="flex flex-col items-end justify-center gap-7">
        <div className="flex gap-2 justify-center items-center sm:ms-0 -ms-8">
          <div>
            <p className="sm:text-base text-sm sm:font-medium font-normal font-inter">{name}</p>
            <p className="text-sm text-end sm:font-medium font-normal font-inter text-[#666464]">
              GYM Guru
            </p>
          </div>
          <Image
            src={second}
            height="40"
            width="40"
            alt="logo"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-4 items-end">
          <p className="sm:text-base text-sm sm:font-medium font-normal font-inter">{training}</p>
          {/* <div className="flex sm:items-end items-start justify-end -mt-4"> */}
          <button className="bg-white block max-w-24 rounded-[10px] text-black text-sm py-2 px-3">
            Start Now
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Workout;
