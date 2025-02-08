import React from "react";
import { IoLogoApple } from "react-icons/io5";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 py-8">
      {/* Left-Side Menu */}
      <div className="lg:w-1/4">
        <ul className="space-y-4 font-medium text-gray-800">
          <li className="hover:underline transition-all duration-300">
            <Link href="/womens">Women Fashion</Link>
          </li>
          <li className="hover:underline transition-all duration-300">
            <Link href="/men">Men Fashion</Link>
          </li>
          <li className="hover:underline transition-all duration-300">
            <Link href="/electronics">Electronics</Link>
          </li>
          <li className="hover:underline transition-all duration-300">
            <Link href="/home$lifestyle">Home & Lifestyle</Link>
          </li>
          <li className="hover:underline transition-all duration-300">
            <Link href="/medicine">Medicine</Link>
          </li>
          <li className="hover:underline transition-all duration-300">
            <Link href="/sportsAndoutdoor">Sports & Outdoor</Link>
          </li>
          <li className="hover:underline transition-all duration-300">
            <Link href="/babyAndToy">Baby & Toys</Link>
          </li>
          <li className="hover:underline transition-all duration-300">
            <Link href="/grocery">Groceries & Pets</Link>
          </li>
          <li className="hover:underline transition-all duration-300">
            <Link href="/healthAndBeauty">Health & Beauty</Link>
          </li>
        </ul>
      </div>

      {/* Right-Side Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between bg-black text-white p-6 h-[344px] max-w-[829px]">
        {/* Product Info */}
        <div className="flex flex-col justify-center lg:items-start items-center text-center lg:text-left">
          <div className="flex items-center gap-2 mb-14 ml-5">
            <IoLogoApple className="text-4xl" />
            <h1 className="text-lg font-medium text-gray-300">iPhone 14 Series</h1>
          </div>
          <div className="text-5xl lg:text-3xl font-bold ml-9">
            <p>Up to 10%</p>
            <p>off Voucher</p>
          </div>
          <button className="mt-6 px-4 ml-16 py-2 flex items-center gap-2 bg-black text-gray-100 hover:underline duration-200 transition-all">
            Shop Now <FaLongArrowAltRight />
          </button>
        </div>

        {/* Banner Image */}
        <Image
          src="/images/banner.jpg"
          alt="banner"
          height={400}
          width={400}
          className="rounded-md"
        />
      </div>
    </div>
  );
}

export default Hero;
