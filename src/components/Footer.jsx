import React from "react";
import { FaAtlassian, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FaMeta, FaXTwitter } from "react-icons/fa6";
import { SiBloglovin } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-custom mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <a href="#">
          <h1 className="fundix-heading">
            Fund<span className="fundix-span">IX</span>
          </h1>
        </a>

        <p className="py-4">
          Fundix offers premium financing solutions for BTB, BTC, and SaaS
          platforms. Our data tracking tools help you unlock insights and boost
          revenue. Partner with us to turn your data into growth opportunities.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a
            href="#"
            className="hover:scale-150 transition-transform duration-300"
          >
            <FaAtlassian size={30} />
          </a>
          <a
            href="#"
            className="hover:scale-150 transition-transform duration-300"
          >
            <FaMeta size={30} />
          </a>
          <a
            href="#"
            className="hover:scale-150 transition-transform duration-300"
          >
            <FaXTwitter size={30} />
          </a>
          <a
            href="#"
            className="hover:scale-150 transition-transform duration-300"
          >
            <FaLinkedinIn size={30} />
          </a>
          <a
            href="#"
            className="hover:scale-150 transition-transform duration-300"
          >
            <SiBloglovin size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2  flex flex-col lg:flex-row lg:justify-end lg:space-x-28">
        <div className="mb-6 lg:mb-0">
          <h6 className="font-medium mb-4 text-gray-400">Solutions</h6>
          <ul className="space-y-2">
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Analytics
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Marketing
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Commerce
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Insights
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6 lg:mb-0">
          <h6 className="font-medium mb-4 text-gray-400">Support</h6>
          <ul className="space-y-2">
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Pricing
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Documentation
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Guides
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                API Status
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6 lg:mb-0">
          <h6 className="font-medium mb-4 text-gray-400">Company</h6>
          <ul className="space-y-2">
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Blog
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Jobs
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Press
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6 lg:mb-0">
          <h6 className="font-medium mb-4 text-gray-400">Legal</h6>
          <ul className="space-y-2">
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Claim
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Policy
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-gray-700 text-sm mt-4 text-center lg:text-left">
        Credit © {currentYear}{" "}
        <a
          href="https://github.com/NeroDCD"
          className="hover:text-primary hover:underline transition-colors duration-300"
          target="_blank"
        >
          NeroDCD
        </a>
        . This website was created for learning purposes only.
      </h1>
    </div>
  );
};

export default Footer;
