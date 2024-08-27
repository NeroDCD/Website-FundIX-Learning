import React, { useEffect } from "react";
import TypingEffect from "react-typing-effect";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] h-screen mx-auto text-center flex flex-col justify-center space-y-2">
        <div className="flex justify-center mb-4">
          <p className="bg-gray-800 text-primary font-regular py-2 px-4 sm:text-lg text-sm border-2 border-gray-600 rounded-full inline-block">
            Powered by
            <a href="https://www.openai.com" target="_blank">
              <span className="text-white ml-1 font-medium hover:text-gray-300">
                OpenAI
              </span>
            </a>
          </p>
        </div>

        <h1 className="md:text-7xl sm:text-2xl text-3xl font-bold">
          Boost Your Revenue.
        </h1>

        <div className="flex justify-center items-center space-x-4">
          <p className="md:text-7xl sm:text-4xl text-3xl font-bold">
            Leading tool for
          </p>
          <TypingEffect
            className="md:text-7xl sm:text-4xl text-3xl font-bold text-gradient"
            text={["BTB", "BTC", "SaaS"]}
            speed={140}
            eraseSpeed={120}
            eraseDelay={1000}
            typingDelay={100}
          />
        </div>

        <p className="text-base md:text-[20px] lg:text-[20px] text-gray-500 px-12 md:px-4 leading-relaxed sm:max-w-[500px] mx-auto">
          Track your data with ease to unlock valuable insights. Boost revenue
          for BTB, BTC, and SaaS platforms
        </p>

        <div className="flex justify-center">
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
