import React from 'react';
import Image from 'next/image';

const Banner2 = () => {
  return (
    <div className="bg-black w-full max-w-[1170px] h-auto lg:h-[500px] mx-auto flex flex-col lg:flex-row items-center justify-between mt-6 mb-6 p-6">
      {/* Left Content */}
      <div className="text-center lg:text-left lg:mt-16 w-full lg:w-1/2">
        <h1 className="font-bold text-lg lg:text-xl text-green-700">Categories</h1>
        <div className="text-gray-50 font-semi-bold text-3xl md:text-4xl lg:text-5xl mt-4">
          <h1>Enhance Your</h1>
          <h1>Music Experience</h1>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-8 items-center mt-8 lg:mt-16">
          {/* Timer Blocks */}
          {["23 Hours", "05 Days", "59 Minutes", "35 Seconds"].map((time, index) => {
            const [value, label] = time.split(" ");
            return (
              <div
                key={index}
                className="text-gray-900 bg-gray-50 rounded-full h-16 w-16 flex flex-col justify-center items-center"
              >
                <h1 className="text-xl font-bold">{value}</h1>
                <h1 className="text-sm">{label}</h1>
              </div>
            );
          })}
        </div>
        <div className="mt-8 lg:mt-16">
          <div className="flex justify-center lg:justify-start">
            <button className="bg-green-500 text-gray-50 w-36 md:w-44 py-3 md:py-4 px-6 rounded-lg hover:bg-green-600 transition">
              Buy Now!
            </button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-8 lg:mt-0 lg:mr-20 flex justify-center lg:justify-end w-full lg:w-1/2">
        <Image
          src="/images/banner2.jpg"
          alt="banner2"
          height={330}
          width={568}
          className="rounded-lg w-full max-w-[568px] object-cover"
        />
      </div>
    </div>
  );
};

export default Banner2;
