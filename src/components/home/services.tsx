import React from 'react';
import { FaShippingFast, FaHeadphones, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Free and Fast Delivery */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <FaShippingFast className="text-3xl text-black" />
          </div>
          <h3 className="font-bold text-2lg mt-4">FREE AND FAST DELIVERY</h3>
          <p className="text-sm mt-2">Free delivery for all orders over $140</p>
        </div>

        {/* 24/7 Customer Service */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <FaHeadphones className="text-3xl text-black" />
          </div>
          <h3 className="font-bold text-lg mt-4">24/7 CUSTOMER SERVICE</h3>
          <p className="text-sm mt-2">Friendly 24/7 customer support</p>
        </div>

        {/* Money Back Guarantee */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <FaShieldAlt className="text-3xl text-black" />
          </div>
          <h3 className="font-bold text-lg mt-4">MONEY BACK GUARANTEE</h3>
          <p className="text-sm mt-2">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
