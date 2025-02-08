import React from 'react';
import Image from 'next/image';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Category = () => {
  const categories = [
    {
      id: 1,
      image: '/images/phone.png',
      title: 'Phone',
    },
    {
      id: 2,
      image: '/images/computer.png',
      title: 'Computer',
    },
    {
      id: 3,
      image: '/images/smartwatch.png',
      title: 'Smart Watch',
    },
    {
      id: 4,
      image: '/images/camera.png',
      title: 'Camera',
    },
    {
      id: 5,
      image: '/images/headphone.png',
      title: 'HeadPhones',
    },
    {
      id: 6,
      image: '/images/gamepad (2).png',
      title: 'Gaming',
    },
  ];

  return (
    <div className="text-gray-900 px-4 md:px-8 relative max-w-[1170px] mx-auto">
      {/* Category Header */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Image src="/images/Rectangle 18.png" alt="icon" width={20} height={20} />
          <h1 className="text-red-600 font-bold text-sm ml-2">Category</h1>
        </div>

        {/* Arrows */}
        <div className="flex space-x-2">
          <div className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition">
            <FaLongArrowAltLeft className="text-xl" />
          </div>
          <div className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition">
            <FaLongArrowAltRight className="text-xl" />
          </div>
        </div>
      </div>

      <div className="font-bold text-xl md:text-2xl pt-4">Browse by Category</div>

      {/* Responsive Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center group hover:bg-red-500 hover:text-white transition rounded-md p-4 border border-gray-300"
          >
            <Image
              src={category.image}
              alt={category.title}
              width={80}
              height={80}
              className="object-contain"
            />
            <h2 className="text-center text-sm font-medium mt-2 group-hover:text-white">
              {category.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
