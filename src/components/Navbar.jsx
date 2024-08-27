import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-background bg-opacity-90 backdrop-blur-md shadow-md z-50 flex justify-between items-center h-20 px-4 text-white border-b border-gray-900">
      <div className="max-w-custom mx-auto w-full flex justify-between items-center">
        <a href="#">
          <h1 className="fundix-heading">
            Fund<span className="fundix-span">IX</span>
          </h1>
        </a>

        <ul className="hidden md:flex space-x-4 items-center">
          <li>
            <a
              href="#"
              className="hover:text-primarydark text-base md:text-lg py-2 px-4"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primarydark text-base md:text-lg py-2 px-4"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primarydark text-base md:text-lg py-2 px-4"
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primarydark text-base md:text-lg py-2 px-4"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primarydark text-base md:text-lg py-2 px-4"
            >
              Contact
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 w-full h-screen bg-background transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-600">
            <a href="#">
              <h1 className="fundix-heading">
                Fund<span className="fundix-span">IX</span>
              </h1>
            </a>
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={20} />
            </div>
          </div>

          <ul className="flex flex-col p-4 space-y-4 flex-grow">
            <li className="border-b border-gray-900 pb-4">
              <a href="#" className="block hover:text-primarydark text-lg">
                Home
              </a>
            </li>
            <li className="border-b border-gray-900 pb-4">
              <a href="#" className="block hover:text-primarydark text-lg">
                Features
              </a>
            </li>
            <li className="border-b border-gray-900 pb-4">
              <a href="#" className="block hover:text-primarydark text-lg">
                Solutions
              </a>
            </li>
            <li className="border-b border-gray-900 pb-4">
              <a href="#" className="block hover:text-primarydark text-lg">
                About
              </a>
            </li>
            <li className="border-b border-gray-900 pb-4">
              <a href="#" className="block hover:text-primarydark text-lg">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
