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
    <div className="relative bg-[#161E2A] text-white py-16 flex flex-col items-center">
      <h2 className="text-[#FFD429] font-bold text-lg text-center">
        IRONX Class Timetable
      </h2>
      <h1 className="text-3xl font-bold mt-2 text-center">
        Time Table & BMI Calculator
      </h1>

      <div className="relative p-4 mt-10 flex flex-wrap items-center justify-center gap-8 w-full max-w-5xl">
        <div
          className="absolute right-0 -top-4 w-[450px] h-[450px] bg-cover bg-center rounded-full"
          style={{ backgroundImage: "url('/Images/image 2.png')" }}
        ></div>

        {/* Timetable Section */}
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
                  className="flex justify-between md:items-center items-start md:flex-row flex-col md:gap-0 gap-3 border-b border-gray-600 pb-3"
                >
                  <div>
                    <p className="text-base font-normal font-inter text-[#94989B]">
                      Class name
                    </p>
                    <p className="text-white">{className}</p>
                  </div>
                  <div>
                    <p className="text-base font-normal font-inter text-[#94989B]">
                      Time
                    </p>
                    <p className="text-white">
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
                    <p className="text-base font-normal font-inter text-[#94989B]">
                      Trainer
                    </p>
                    <p className="text-white">
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
                  <button className="px-4 py-2 bg-white text-black font-medium rounded-md">
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
            {["Below 18.5", "18.5 - 24.9", "25.0 - 29.9", "30.0 and Above"].map(
              (bmi, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b border-gray-600 pb-2"
                >
                  <p className="text-white">{bmi}</p>
                  <p className="text-white font-semibold">
                    {["Underweight", "Healthy", "Overweight", "Obese"][index]}
                  </p>
                </div>
              )
            )}
          </div>
          <p className="text-center mt-4 text-white">
            BMR Metabolic Rate / BMI Body Mass Index
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeTableBMI;
