import React from "react";
import Image from "../assets/Male.png";
import { MdShutterSpeed } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { HiOutlineCalculator, HiOutlineBookOpen } from "react-icons/hi";
import { GrConnectivity } from "react-icons/gr";

const Benefits = () => {
  return (
    <div className="w-full bg-white py-12 px-4 sm:py-14 md:py-24">
      <div className="max-w-custom mx-auto grid md:grid-cols-2 gap-8">
        <div className="flex items-start md:order-2 order-1">
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={Image}
              alt="Image"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center md:items-start text-left h-full md:order-1 order-2">
          <p className="text-primarydark font-bold mb-2 w-full">
            BENEFITS OF FUNDIX
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 w-full">
            Discover the Advantages of Using Fundix
          </h1>
          <ul className="text-base md:text-lg leading-relaxed pt-4 text-left pl-0 md:pl-8">
            <li className="flex items-start mb-4 space-x-2">
              <HiOutlineCalculator className="text-background mt-1" />
              <span className="flex-1 break-words">
                Easy financial management with smart tools.
              </span>
            </li>
            <li className="flex items-start mb-4 space-x-2">
              <ImPower className="text-background mt-1" />
              <span className="flex-1 break-words">
                Powerful analytics for informed decisions.
              </span>
            </li>
            <li className="flex items-start mb-4 space-x-2">
              <MdShutterSpeed className="text-background mt-1" />
              <span className="flex-1 break-words">
                Real-time tracking of your finances.
              </span>
            </li>
            <li className="flex items-start mb-4 space-x-2">
              <HiOutlineBookOpen className="text-background mt-1" />
              <span className="flex-1 break-words">
                Custom reports to fit your needs.
              </span>
            </li>
            <li className="flex items-start mb-4 space-x-2">
              <GrConnectivity className="text-background mt-1" />
              <span className="flex-1 break-words">
                Easy integration with your existing systems.
              </span>
            </li>
          </ul>
          <button className="btn-secondary mt-4">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
