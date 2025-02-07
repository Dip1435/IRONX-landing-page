import Image from "next/image";
import React from "react";

const Workout = ({ main, name, second, style }) => {
  return (
    <div className={style}>
      <Image src={main} height="180" width="130" alt="logo" />
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 justify-center items-center sm:ms-0 -ms-8">
          <div>
            <p className="text-base font-medium font-inter">{name}</p>
            <p className="text-sm text-end font-medium font-inter text-[#666464]">
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
        <p className="sm:text-center text-start text-base font-medium font-inter">
          Plates Training
        </p>
        <div className="flex sm:items-end items-start justify-end -mt-4">
          <button className="bg-white rounded-xl text-black px-4 py-1">
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workout;
