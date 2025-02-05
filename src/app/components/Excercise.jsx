import React from "react";
import Workout from "../common/Workout";
import ServicesScroll from "../common/ServicesScroll";
import Image from "next/image";

const Excercise = () => {
  return (
    <div className="bg-[#161E2A] pt-5">
      <div className="p-6 bg-[#0C1625] md:mx-16 mx-8 max-w-fit flex gap-3 relative rounded-xl flex-wrap">
        <Workout
          main={
            "/Images/women-exercising-with-two-dumbbell-weight-plates 1 (1).png"
          }
          name={"Esther Howard"}
          second={"/Images/image 1.png"}
          style={
            "flex rounded-xl bg-[#D7F2F4] w-[300px] h-[180px] text-black justify-center items-center"
          }
        />
        <Workout
          main={"/Images/pink-girl.png"}
          name={"Esther Howard"}
          second={
            "/Images/portrait-gorgeous-body-positive-latin-woman-pink-sports-hoodie-exercising-with-dumbbells-pink 1.png"
          }
          style={
            "flex rounded-xl bg-[#FFDFDF] w-[300px] h-[180px] text-black justify-center items-center"
          }
        />
        <Workout
          main={"/Images/bodyman.png"}
          name={"Esther Howard"}
          second={"/Images/young-fitness-man-studio 1.png"}
          style={
            "flex rounded-xl bg-[#FBF6B5] w-[300px] h-[180px] text-black justify-center items-center"
          }
        />
      </div>
      <div className="bg-[#FBFBFB] flex  py-3 -rotate-2 mt-2 text-sm mb-5 overflow-x-auto">
        <div className=" animate-scroll flex">
          <ServicesScroll
            text={"💪Powerlifting"}
            className={
              "bg-[#D7F2F4] rounded-[100px] text-center w-[200px] text-black px-1 py-[20x]"
            }
          />
          <ServicesScroll
            text={"🏋️Weightlifting"}
            className={"bg-[#FBF6B5] rounded-[100px] text-center w-[200px] text-black px-1 py-[20x]"}
          />
          <ServicesScroll
            text={"🤸 Bodyweight Exercises"}
            className={"bg-[#FFDFDF] rounded-[100px] text-center w-[200px] text-black px-1 py-[20x]"}
          />
          <ServicesScroll
            text={"🏋️Powerlifting"}
            className={"bg-[#D7F2F4] rounded-[100px] text-center w-[200px] text-black px-1 py-[20x]"}
          />
          <ServicesScroll
            text={"🌀Resistance Band Workouts"}
            className={"bg-[#F9ECFF] rounded-[100px] text-center w-[200px] text-black px-1 py-[20x]"}
          />
          <ServicesScroll
            text={"🚶‍♂️Treadmill Running/Walking"}
            className={"bg-[#FFDFDF] rounded-[100px] text-center w-[200px] text-black px-1 py-[20x]"}
          />
          <ServicesScroll
            text={"🚴Cycling"}
            className={"bg-[#FBF6B5] rounded-[100px] text-center w-[200px] text-black px-1 py-[20x]"}
          />
          <ServicesScroll
            text={"🔥Plyometric Exercises"}
            className={"bg-[#EBEBEB] rounded-[100px] text-center w-[200px] text-black px-1 py-[20x]"}
          />
          <ServicesScroll
            text={"🧘Pilates"}
            className={
              "bg-[#D7F2F4] text-sm rounded-[100px] text-center w-[200px] text-black px-1 py-[20x]"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Excercise;
