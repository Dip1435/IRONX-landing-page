import Image from "next/image";

const TimeTableBMI = () => {
  const days = [
    "Saturday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  return (
    <div className="relative bg-[#161E2A] text-white py-16 pb-24 flex flex-col items-center">
      <div className="mb-5 text-center">
        <h2 className="text-[#FFD429] font-bold text-lg">
          IRONX Class Timetable
        </h2>
        <h1 className="text-3xl font-bold mt-2">Time Table & BMI Calculator</h1>
      </div>

      <div className="relative sm:p-4 p-6 mt-10 flex lg:flex-row flex-col  items-center justify-center gap-8 w-full max-w-5xl">
        <div
          className="lg:absolute lg:right-2 lg:top-1/2 lg:transform lg:-translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-cover bg-center rounded-full"
          style={{ backgroundImage: "url('/Images/image 2.png')" }}
        ></div>

        <div className="p-6 rounded-lg shadow-lg relative z-10 bg-[#192332]">
          {/* Days Tabs */}
          <div className="flex space-x-2 mb-4 flex-wrap md:space-y-0 space-y-2">
            {days.map((day) => (
              <button
                key={day}
                className={`px-4 py-2 rounded-md text-sm font-medium border border-gray-600 transition-all ${
                  day == "Saturday"
                    ? "bg-[#FFD429] text-black"
                    : "bg-transparent text-gray-300"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule Table */}
          <div className="space-y-4">
            {["Fitness", "Body Building", "Running", "Fitness"].map(
              (className, index) => (
                <div
                  key={index}
                  className={`flex justify-between md:items-center items-start md:flex-row flex-col md:gap-0 gap-3 ${
                    index !== 3 && "border-b border-gray-600"
                  }  pb-3`}
                >
                  <div>
                    <p className="text-sm font-normal font-inter text-[#94989B]">
                      Class name
                    </p>
                    <p className="text-white text-sm font-medium">
                      {className}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-normal font-inter text-[#94989B]">
                      Time
                    </p>
                    <p className="text-white text-sm font-medium">
                      {
                        [
                          "9:00am - 10:00am",
                          "10:30am - 11:00am",
                          "3:00pm - 4:30pm",
                          "7:00pm - 9:00pm",
                        ][index]
                      }
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-normal font-inter text-[#94989B]">
                      Trainer
                    </p>
                    <p className="text-white text-sm font-medium">
                      {
                        [
                          "Henry Joseph",
                          "Esa Elizabeth",
                          "Darrell Steward",
                          "John Williams",
                        ][index]
                      }
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-white text-black font-medium text-sm rounded-[10px]">
                    Join now
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* BMI Section */}
        <div className="relative md:-ms-10 mt-4 p-6 rounded-lg overflow-hidden">
          <div className="flex items-center justify-center">
            <Image
              src="/Images/logo-white 1.png"
              height="33"
              width="130"
              alt="logo"
            />
          </div>
          <div className="mt-6 space-y-2">
            <div className="absolute left-1/2 h-[170px]  border-l-[0.5px] border-gray-600"></div>
            {[
              "BMI",
              "Below 18.5",
              "18.5 - 24.9",
              "25.0 - 29.9",
              "30.0 and Above",
            ].map((bmi, index) => (
              <div
                key={index}
                className={`flex justify-between ${
                  index !== 4 && "border-b border-gray-600"
                }  pb-2`}
              >
                <p
                  className={`text-[#E6E6E6] sm:text-sm text-xs  ${
                    index === 0 ? "sm:font-bold font-semibold" : "font-normal"
                  }`}
                >
                  {bmi}
                </p>
                <p
                  className={`text-[#E6E6E6] sm:text-sm text-xs  ${
                    index === 0 ? "sm:font-bold font-semibold" : "font-normal"
                  }`}
                >
                  {
                    [
                      "WEIGHT STATUS",
                      "Underweight",
                      "Healthy",
                      "Overweight",
                      "Obese",
                    ][index]
                  }
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-white sm:text-base text-sm font-normal">
            <span className="font-semibold sm:text-base text-sm">BMR </span>{" "}
            Metabolic Rate /{" "}
            <span className="font-semibold sm:text-base text-sm">BMI </span>{" "}
            Body Mass Index
          </p>
        </div>
      </div>
    </div>

    // <div className="relative bg-[#161E2A] text-white py-16 pb-24 flex flex-col items-center">
    //   <div className="mb-5">
    //     <h2 className="text-[#FFD429] font-bold text-lg text-center">
    //       IRONX Class Timetable
    //     </h2>
    //     <h1 className="text-3xl font-bold mt-2 text-center">
    //       Time Table & BMI Calculator
    //     </h1>
    //   </div>
    //   <div className="relative sm:p-4 p-6 mt-10 flex lg:flex-row flex-col items-center justify-center gap-8 w-full max-w-5xl">
    //     <div
    //       className="lg:absolute left-[500px] -top-[60px] sm:w-[500px] w-[300px] h-[300px] sm:h-[500px] bg-cover bg-center rounded-full"
    //       style={{ backgroundImage: "url('/Images/image 2.png')" }}
    //     ></div>

    //     {/* Timetable Section */}
    //   <div className="p-6 rounded-lg shadow-lg relative z-10 bg-[#192332]">
    //     {/* Days Tabs */}
    //     <div className="flex space-x-2 mb-4 flex-wrap md:space-y-0 space-y-2">
    //       {days.map((day) => (
    //         <button
    //           key={day}
    //           className={`px-4 py-2 rounded-md text-sm font-medium border border-gray-600 transition-all ${
    //             day == "Saturday"
    //               ? "bg-[#FFD429] text-black"
    //               : "bg-transparent text-gray-300"
    //           }`}
    //         >
    //           {day}
    //         </button>
    //       ))}
    //     </div>

    //     {/* Schedule Table */}
    //     <div className="space-y-4">
    //       {["Fitness", "Body Building", "Running", "Fitness"].map(
    //         (className, index) => (
    //           <div
    //             key={index}
    //             className={`flex justify-between md:items-center items-start md:flex-row flex-col md:gap-0 gap-3 ${
    //               index !== 3 && "border-b border-gray-600"
    //             }  pb-3`}
    //           >
    //             <div>
    //               <p className="text-sm font-normal font-inter text-[#94989B]">
    //                 Class name
    //               </p>
    //               <p className="text-white text-sm font-medium">
    //                 {className}
    //               </p>
    //             </div>
    //             <div>
    //               <p className="text-sm font-normal font-inter text-[#94989B]">
    //                 Time
    //               </p>
    //               <p className="text-white text-sm font-medium">
    //                 {
    //                   [
    //                     "9:00am - 10:00am",
    //                     "10:30am - 11:00am",
    //                     "3:00pm - 4:30pm",
    //                     "7:00pm - 9:00pm",
    //                   ][index]
    //                 }
    //               </p>
    //             </div>
    //             <div>
    //               <p className="text-sm font-normal font-inter text-[#94989B]">
    //                 Trainer
    //               </p>
    //               <p className="text-white text-sm font-medium">
    //                 {
    //                   [
    //                     "Henry Joseph",
    //                     "Esa Elizabeth",
    //                     "Darrell Steward",
    //                     "John Williams",
    //                   ][index]
    //                 }
    //               </p>
    //             </div>
    //             <button className="px-4 py-2 bg-white text-black font-medium text-sm rounded-[10px]">
    //               Join now
    //             </button>
    //           </div>
    //         )
    //       )}
    //     </div>
    //   </div>

    //   {/* BMI Section */}
    //   <div className="relative md:-ms-10 mt-4 p-6 rounded-lg overflow-hidden">
    //     <div className="flex items-center justify-center">
    //       <Image
    //         src="/Images/logo-white 1.png"
    //         height="33"
    //         width="130"
    //         alt="logo"
    //       />
    //     </div>
    //     <div className="mt-6 space-y-2">
    //       <div className="absolute left-1/2 h-[170px]  border-l-[0.5px] border-gray-600"></div>
    //       {[
    //         "BMI",
    //         "Below 18.5",
    //         "18.5 - 24.9",
    //         "25.0 - 29.9",
    //         "30.0 and Above",
    //       ].map((bmi, index) => (
    //         <div
    //           key={index}
    //           className={`flex justify-between ${
    //             index !== 4 && "border-b border-gray-600"
    //           }  pb-2`}
    //         >
    //           <p
    //             className={`text-[#E6E6E6] sm:text-sm text-xs  ${
    //               index === 0 ? "sm:font-bold font-semibold" : "font-normal"
    //             }`}
    //           >
    //             {bmi}
    //           </p>
    //           <p
    //             className={`text-[#E6E6E6] sm:text-sm text-xs  ${
    //               index === 0 ? "sm:font-bold font-semibold" : "font-normal"
    //             }`}
    //           >
    //             {
    //               [
    //                 "WEIGHT STATUS",
    //                 "Underweight",
    //                 "Healthy",
    //                 "Overweight",
    //                 "Obese",
    //               ][index]
    //             }
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //     <p className="text-center mt-4 text-white sm:text-base text-sm font-normal">
    //       <span className="font-semibold sm:text-base text-sm">BMR </span>{" "}
    //       Metabolic Rate /{" "}
    //       <span className="font-semibold sm:text-base text-sm">BMI </span>{" "}
    //       Body Mass Index
    //     </p>
    //   </div>
    // </div>
    // </div>
  );
};

export default TimeTableBMI;
