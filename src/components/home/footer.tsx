import React from 'react';
import { BsQrCode } from "react-icons/bs";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="text-gray-50 bg-black w-full px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Subscribe Section */}
        <div>
          <h1 className="font-extrabold text-2xl sm:text-3xl mb-4">Exclusive</h1>
          <ul className="mb-4">
            <li className="text-sm mb-1">Subscribe</li>
            <li className="text-sm">Get 10% off your first order</li>
          </ul>
          <input
            type="text"
            placeholder="Enter your email"
            className="border border-gray-500 px-2 py-2 rounded-md  mt-2"
          />
        </div>

        {/* Support Section */}
        <div>
          <h1 className="font-bold text-lg sm:text-xl mb-4">Support</h1>
          <ul className="text-lg  space-y-2 ">
            <li >111 Bijoy Sarani Dhaka</li>
            <li className=''>DH 1515, Bangladesh</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        {/* Account Section */}
        <div>
          <h1 className="font-bold text-lg sm:text-xl mb-4">Account</h1>
          <ul className="text-sm space-y-2">
            <li>My Account</li>
            <li><Link href='/login'> Login/Register</Link></li>
            <li><Link href='/cart'> Cart</Link></li>
            <li><Link href='/wishlist'> Wishlist</Link></li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h1 className="font-bold text-lg sm:text-xl mb-4">Quick Links</h1>
          <ul className="text-sm space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>

            <li><Link href='/faqs'> FAQ</Link></li>
            <li><Link href='/contact'> Contact</Link></li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h1 className="font-bold text-lg sm:text-xl mb-4">Download App</h1>
          <p className="text-sm mb-4">Save $3 with App (New Users Only)</p>
          <BsQrCode className="text-7xl border rounded-md p-2" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
