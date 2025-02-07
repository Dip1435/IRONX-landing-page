"use client";
import Image from "next/image";
import { useState } from "react";

const Slider = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative w-full mx-auto h-[872px] bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/strong-man.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>

      {/* Navbar */}
      <nav className="absolute font-inter w-full top-0 left-0 bg-[#161E2ADE] flex items-center justify-between px-6 md:px-8 py-3 md:py-5 text-white z-10">
        {/* Logo */}
        <div>
          <Image
            src="/Images/logo-white 1.png"
            height="30"
            width="120"
            alt="logo"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 text-[16px]">
          {[
            "Home",
            "Services",
            "Classes",
            "Membership",
            "Blog",
            "About Us",
          ].map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                item === "Home" ? "text-[#FFD429]" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Icons + Button (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center space-x-6">
          <Image
            src="/Icons/Search 1.svg"
            height="20"
            width="20"
            alt="search"
          />
          <Image
            src="/Icons/Document Download 1.svg"
            height="22"
            width="22"
            alt="download"
          />
          <button className="bg-[#FFD429] text-black px-4 py-2 rounded-lg text-[16px] font-inter font-medium">
            Get in touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-14 left-0 w-full bg-[#161E2A] z-20 py-4 flex flex-col items-center space-y-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } lg:hidden`}
      >
        <ul className="flex flex-col space-y-4 text-lg text-center">
          {[
            "Home",
            "Services",
            "Classes",
            "Membership",
            "Blog",
            "About Us",
          ].map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                item === "Home" ? "text-[#FFD429]" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="md:hidden flex items-center space-x-4 mt-4">
          <Image
            src="/Icons/Search 1.svg"
            height="20"
            width="20"
            alt="search"
          />
          <Image
            src="/Icons/Document Download 1.svg"
            height="22"
            width="22"
            alt="download"
          />
          <button className="bg-[#FFD429] text-black px-4 py-2 rounded-lg font-semibold">
            Get in touch
          </button>
        </div>
      </div>

      {/* Slider Content */}
      <div className="absolute inset-0 container mx-auto flex flex-col justify-center items-center text-white text-center px-4">
        <div className="bg-[#FFD429] md:absolute top-[270px] left-[300px] text-black px-3 py-2 rounded-full text-[12px] md:text-[16px] font-medium">
          Mind- <span className="font-bold">Body</span>-Soul{" "}
          <span className="font-bold">Balance</span>
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold mt-4 leading-tight">
          Achieve your dream physique
          <br /> with our <span className="text-[#FFD429]">
            expert-led
          </span>{" "}
          classes.
        </h1>
        <p className="text-sm lg:text-lg mt-4 max-w-lg lg:max-w-2xl font-medium text-gray-300">
          Empower your transformation with our custom-fit classes, <br />
          discover the ideal you with our professional training.
        </p>
        <button className="mt-6 bg-[#FFD429] text-black px-4 py-2 lg:px-5 lg:py-3 rounded-[10px] font-medium text-sm lg:text-base">
          TIME TO GET FIT
        </button>
      </div>
    </div>
  );
};

export default Slider;
