import Image from "next/image";
import React from "react";
import { IoSend } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#161E2A] text-white py-12 px-8 md:px-16">
      <div className="flex flex-col flex-wrap justify-between gap-4">
        <div className="flex justify-between items-start flex-wrap md:gap-0 gap-4">
          {/* About IRONX */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-5 font-inter">About IRONX</h3>
            <p className="text-gray-400 text-sm">
              Push limits, crush goals, and transform at IronX Gym—your ultimate
              fitness hub. With state-of-the-art equipment, expert trainers, and
              personalized workout plans, we’re here to empower your fitness
              journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 flex flex-col">
            <h3 className="text-xl font-bold mb-5 font-inter">Quick Link</h3>
            <div className="flex justify-start items-start gap-9">
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Home</li>
                <li>Services</li>
                <li>Classics</li>
                <li>Membership</li>
              </ul>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Blogs</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-5 font-inter">
              Get In Touch
            </h3>
            <ul className="text-gray-400 space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <Image
                  src="/Icons/map-pin.svg"
                  height="28"
                  width="28"
                  alt="logo"
                />
                <span>64304 Spencer Estate, East Kristoferside, SD 00967</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/Icons/at-sign.svg"
                  height="24"
                  width="24"
                  alt="logo"
                />
                <span className="text-[#FFD429]">
                  ironxgymfitness@ironx.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/Icons/phone-call.svg"
                  height="24"
                  width="24"
                  alt="logo"
                />{" "}
                <span className="text-[#FFD429]">+61 123 456 7890</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5 flex-wrap md:gap-0 gap-4">
          <div className="w-full md:w-1/2">
            <div className="text-lg font-bold flex items-center gap-2">
              <span className="text-2xl">
                <Image
                  src="/Images/logo-white 1.png"
                  height="33"
                  width="130"
                  alt="logo"
                />
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Need assistance? Email us at{" "}
              <span className="text-[#FFD429]">ironxgymfitness@ironx.com</span>,
              and we’ll be glad to help!
            </p>
          </div>
          <div className="w-full flex md:w-1/2 mt-2 space-y-2 flex-wrap">
            <div className="flex md:w-1/2 justify-start items-start flex-wrap gap-2">
              <h3 className="text-lg font-semibold ms-2">Subscribe Now</h3>
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 w-full rounded-full focus:outline-none"
                />
                <button className="absolute right-2 bg-yellow-400 p-2 rounded-full">
                  <IoSend className="text-black" />
                </button>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex md:w-1/2 w-full items-center justify-start space-x-3 text-gray-400">
              <Image
                src="/Icons/facebook.svg"
                height="24"
                width="24"
                alt="logo"
              />{" "}
              <Image
                src="/Icons/twitter.svg"
                height="24"
                width="24"
                alt="logo"
              />{" "}
              <Image
                src="/Icons/youtube.svg"
                height="24"
                width="24"
                alt="logo"
              />{" "}
              <Image
                src="/Icons/instagram.svg"
                height="24"
                width="24"
                alt="logo"
              />{" "}
              <Image
                src="/Icons/linkedin.svg"
                height="24"
                width="24"
                alt="logo"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
