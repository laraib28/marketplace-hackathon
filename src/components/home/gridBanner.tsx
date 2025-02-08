import React from "react";
import Image from "next/image";

const GridBanner = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="flex gap-2 items-center">
        <Image src="/images/Rectangle 18.png" alt="Icon representing featured section" width={20} height={20} />
        <h1 className="text-red-600 text-lg">Featured</h1>
      </div>
      <div className="text-3xl font-bold mt-4">
        <h1>New Arrival</h1>
      </div>

      {/* Grid Section */}
      <div className="max-w-[1120px] mx-auto grid lg:grid-cols-2 gap-6 text-gray-50 p-6">
        {/* PlayStation Card */}
        <div className="relative h-[600px] col-span-1 lg:row-span-2 bg-black rounded-lg overflow-hidden">
          <Image
            src="/images/gban.png"
            alt="PlayStation 5 with black and white design"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-gray-100">
            <h2 className="text-3xl font-semibold">PlayStation 5</h2>
            <p className="text-sm mt-1">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <button className="mt-2 underline text-xl">Shop Now</button>
          </div>
        </div>

        {/* Women Collection */}
        <div className="relative h-[284px] bg-black rounded-lg overflow-hidden">
          <Image
            src="/images/gban2.jpg"
            alt="Women&#39;s Collection featuring stylish clothing"
            width={100}
            height={100}
            className="opacity-50 object-cover w-full h-full"
          />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-2xl font-bold text-gray-50">Women&#39;s Collections</h3>
            <p className="text-sm mt-2">
              Featured woman collections that <br /> give you another vibe.
            </p>
            <button className="mt-2 underline">Shop Now</button>
          </div>
        </div>

        {/* Speakers and Perfume (2 Columns) */}
        <div className="grid grid-cols-2 gap-6">
          {/* Speakers Card */}
          <div className="relative bg-black text-white rounded-lg h-[284px] overflow-hidden">
            <Image
              src="/images/gban3.png"
              alt="High-quality Amazon wireless speakers"
              width={800}
              height={800}
              className="object-cover opacity-50 w-full h-full"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-2xl font-bold">Speakers</h3>
              <p className="text-sm mt-2">Amazon wireless speakers.</p>
              <button className="mt-2 underline text-lg">Shop Now</button>
            </div>
          </div>

          {/* Perfume Card */}
          <div className="relative bg-black text-white rounded-lg h-[284px] overflow-hidden">
            <Image
              src="/images/gban4.png"
              alt="GUCCI INTENSE OUD EDP perfume bottle"
              width={400}
              height={250}
              className="object-cover opacity-50 w-full h-full"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-2xl font-semibold">Perfume</h3>
              <p className="text-sm mt-2">GUCCI INTENSE OUD EDP.</p>
              <button className="mt-2 underline">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridBanner;
