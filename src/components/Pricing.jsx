import React from "react";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";

const Pricing = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-custom mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl border-2 border-gray-200 bg-white flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] " src={Icon1} alt="Single" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">₱8,300</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            <button className="btn-primary">Start Trial</button>
          </div>
        </div>

        <div className="w-full shadow-xl border-2 border-[#74d8b8] bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Icon2}
            alt="Single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
          <p className="text-center text-4xl font-bold">₱11,100</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b border-gray-900 font-semibold mx-8 mt-8">
              1 TB Storage
            </p>
            <p className="py-2 border-b border-gray-900 font-semibold mx-8">
              3 Users Allowed
            </p>
            <p className="py-2 border-b border-gray-900 font-semibold mx-8">
              Send up to 10 GB
            </p>
            <button className="btn-secondary">Start Trial</button>
          </div>
        </div>

        <div className="w-full shadow-xl border-2 border-gray-200 bg-white flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem]" src={Icon3} alt="Single" />
          <h2 className="text-2xl font-bold text-center py-8">Group Account</h2>
          <p className="text-center text-4xl font-bold">₱17,700</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8">10 Users Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB</p>
            <button className="btn-primary">Start Trial</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
