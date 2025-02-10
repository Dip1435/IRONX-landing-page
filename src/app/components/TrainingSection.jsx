import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const trainingData = [
  {
    title: "PERSONAL TRAINING",
    description:
      "Nulla facilisi. Hustle Hard, Recover Smart, And Stay Focused On Your Fitness Journey.",
    image: "/Images/image (1).png",
  },
  {
    title: "GROUP WORKOUT",
    description:
      "Nulla facilisi. Hustle Hard, Recover Smart, And Stay Focused On Your Fitness Journey.",
    image: "/Images/image (2).png",
  },
  {
    title: "MUSCLE BUILDING",
    description:
      "Nulla facilisi. Hustle Hard, Recover Smart, And Stay Focused On Your Fitness Journey.",
    image: "/Images/image (3).png",
  },
];

const TrainingSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16 md:px-8 px-6"
      style={{
        backgroundImage:
          "url('/Images/fitness-woman-working-out-with-battle-ropes-gym 2.png')",
      }}
    >
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-[#FFD429] font-bold sm:text-lg text-base">
          IRONX Gym & Fitness Training
        </h2>
        <h1 className="text-white sm:text-3xl text-2xl font-extrabold mt-2">
          Our Upcoming Training
        </h1>

        <div className="mt-10 flex md:flex-row flex-col gap-6">
          {trainingData.map((training, index) => (
            // <div key={index}>
            //   <div
            //     key={index}
            //     className="relative bg-gray-800 rounded-2xl p-4 overflow-hidden shadow-lg transform transition duration-300"
            //   >
            //     <img
            //       src={training.image}
            //       alt={training.title}
            //       className="w-full h-60 object-cover opacity-80 rounded-2xl"
            //     />

            //     <div className="p-6 text-center">
            //       <h3
            //         className={`sm:text-2xl text-xl font-extrabold ${
            //           index === 0 ? "text-[#FFD429] stroke-yellow" : "text-white"
            //         } `}
            //       >
            //         <span
            //           className={` ${
            //             index === 0
            //               ? "text-[#FFD429] stroke-yellow  text-transparent bg-clip-text"
            //               : " stroke-white text-transparent bg-clip-text"
            //           }`}
            //         >
            //           {training.title.split(" ")[0]}
            //         </span>{" "}
            //         {training.title.split(" ").slice(1).join(" ")}
            //       </h3>
            //       <p className="text-[#E6E6E6] capitalize sm:text-sm text-xs mt-2">
            //         {training.description}
            //       </p>
            //     </div>
            //   </div>
            //   <div className="flex items-center justify-center flex-col gap-2 mt-2">
            //     <div className="md:h-12 md:w-12 h-8 w-8 flex items-center justify-center rounded-full border text-white">
            //       <IoIosArrowRoundForward className="md:h-10 md:w-10 h-6 w-6" />
            //     </div>
            //     <a
            //       href="#"
            //       className={`text-sm ${index === 0 && "text-[#FFD429]"}`}
            //     >
            //       Click for Details
            //     </a>
            //   </div>
            // </div>
            <div key={index} className="group">
              <div
                key={index}
                className="relative bg-gray-800 rounded-2xl p-4 overflow-hidden shadow-lg transform transition duration-300"
              >
                <img
                  src={training.image}
                  alt={training.title}
                  className="w-full h-60 object-cover opacity-80 rounded-2xl"
                />

                <div className="p-6 text-center">
                  <h3 className="sm:text-2xl text-xl font-extrabold group-hover:text-[#FFD429]">
                    <span className="text-[#FFD429] group-hover:stroke-yellow-500 stroke-white text-transparent bg-clip-text">
                      {training.title.split(" ")[0]}
                    </span>{" "}
                    {training.title.split(" ").slice(1).join(" ")}
                  </h3>
                  <p className="text-[#E6E6E6] capitalize sm:text-sm text-xs mt-2">
                    {training.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col gap-2 mt-2">
                <div className="md:h-12 md:w-12 h-8 w-8 flex items-center justify-center rounded-full border group-hover:border-[#FFD429] group-hover:text-[#FFD429] text-white">
                  <IoIosArrowRoundForward className="md:h-10 md:w-10 h-6 w-6" />
                </div>
                <a
                  href="#"
                  className="text-sm group-hover:text-[#FFD429]"
                >
                  Click for Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
