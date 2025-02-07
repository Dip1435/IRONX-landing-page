import React from "react";
import Workout from "../common/Workout";
import ServicesScroll from "../common/ServicesScroll";
import Image from "next/image";

const Excercise = () => {
  return (
    <div className="bg-[#161E2A] container mx-auto pt-5 ">
      <div className="flex relative gap-2 justify-center items-center md:mx-8 mx-6">
        <div className="sm:p-5 p-3 bg-[#0C1625]  max-w-fit flex  justify-center items-center gap-4  rounded-xl flex-wrap">
          <Workout
            main={
              "/Images/women-exercising-with-two-dumbbell-weight-plates 1 (1).png"
            }
            name={"Esther Howard"}
            second={"/Images/image 1.png"}
            style={
              "flex rounded-xl bg-[#D7F2F4] sm:w-[300px] sm:h-[180px] w-[270px] h-[170px] text-black justify-center items-center p-2"
            }
          />
          <Workout
            main={"/Images/pink-girl.png"}
            name={"Esther Howard"}
            second={
              "/Images/portrait-gorgeous-body-positive-latin-woman-pink-sports-hoodie-exercising-with-dumbbells-pink 1.png"
            }
            style={
              "flex rounded-xl bg-[#FFDFDF] sm:w-[300px] sm:h-[180px] w-[270px] h-[170px] text-black justify-center items-center p-2"
            }
          />
          <Workout
            main={"/Images/bodyman.png"}
            name={"Esther Howard"}
            second={"/Images/young-fitness-man-studio 1.png"}
            style={
              "flex rounded-xl bg-[#FBF6B5] sm:w-[300px] sm:h-[180px] w-[270px] h-[170px] text-black justify-center items-center p-2"
            }
          />
        </div>

        <div className=" xl:block hidden -mt-[150px] border-[2px] border-[#999999ba] rounded-[40px]">
          <div className="relative w-[230px] h-[400px] bg-black rounded-[40px] border-[10px] border-black overflow-hidden shadow-lg">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-700 rounded-full"></div>
            <img
              src="/Images/full-shot-man-training-with-headphones 1.png"
              alt="Workout"
              className="w-full h-full object-cover"
            />

            <button className="absolute bottom-9 left-1/2 -translate-x-1/2 font-normal text-xs text-gray-900 w-[120px] bg-white rounded-xl px-0  py-3 flex items-center shadow-lg">
              <Image
                src="/Icons/play.svg"
                className="ms-5 me-2"
                height="12"
                width="12"
                alt="play"
              />{" "}
              Watch Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#FBFBFB] flex py-3  -rotate-2 justify-center items-center md:-mt-4 mt-2 text-sm mb-7 overflow-hidden">
        <div className="animate-scroll flex space-x-3 w-fit whitespace-nowrap">
          <ServicesScroll
            text={"💪Powerlifting"}
            className={
              "bg-[#D7F2F4] rounded-[100px] text-center w-[100px] text-black py-1"
            }
          />
          <ServicesScroll
            text={"🏋️Weightlifting"}
            className={
              "bg-[#FBF6B5] rounded-[100px] text-center w-[110px] text-black py-1"
            }
          />
          <ServicesScroll
            text={"🤸 Bodyweight Exercises"}
            className={
              "bg-[#FFDFDF] rounded-[100px] text-center w-[170px] text-black py-1"
            }
          />
          <ServicesScroll
            text={"🏋️Powerlifting"}
            className={
              "bg-[#D7F2F4] rounded-[100px] text-center w-[100px] text-black py-1"
            }
          />
          <ServicesScroll
            text={"🌀Resistance Band Workouts"}
            className={
              "bg-[#F9ECFF] rounded-[100px] text-center w-[200px] text-black py-1"
            }
          />
          <ServicesScroll
            text={"🚶‍♂️Treadmill Running/Walking"}
            className={
              "bg-[#FFDFDF] rounded-[100px] text-center w-[200px] text-black py-1"
            }
          />
          <ServicesScroll
            text={"🚴Cycling"}
            className={
              "bg-[#FBF6B5] rounded-[100px] text-center w-[80px] text-black py-1"
            }
          />
          <ServicesScroll
            text={"🔥Plyometric Exercises"}
            className={
              "bg-[#EBEBEB] rounded-[100px] text-center w-[170px] text-black py-1"
            }
          />
          <ServicesScroll
            text={"🧘Pilates"}
            className={
              "bg-[#D7F2F4] text-sm rounded-[100px] text-center w-[80px] text-black py-1"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Excercise;
