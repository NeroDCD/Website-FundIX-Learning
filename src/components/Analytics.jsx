import React from "react";
import Image from "../assets/Female.png";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-12 px-4 sm:py-14 md:py-24">
      <div className="max-w-custom mx-auto grid md:grid-cols-2 gap-8">
        <div className="flex items-start">
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={Image}
              alt="Image"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center md:pl-8">
          <p className="text-primarydark font-bold mb-2 uppercase">
            Optimize Your Data
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Effortless Data Management, Powerful Insights
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            Maximize the value of your data with Fundix's all-in-one analytics
            dashboard. Our intuitive platform helps you manage your data
            efficiently, uncover valuable insights, and make smarter
            decisions—all in one place. Say goodbye to complexity and hello to
            clarity with Fundix.
          </p>
          <button className="btn-secondary mt-4">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
