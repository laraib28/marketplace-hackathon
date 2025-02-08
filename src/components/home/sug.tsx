// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// const ProductPage = async ({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) => {

//   const slug = (await params).slug

//   const product: Product | null = await client.fetch(
//     `*[_type == "product2" && slug.current == $slug][0] {
//       name,
//       description,
//       "image": image.asset->url,
//       price,
//       discountPercentage,
//       priceWithoutDiscount,
//       rating,
//       ratingCount,
//       tags,
//       badge,
//       slug
//     }`,
//     { slug }
//   );

//   if (!product) {
//     notFound();
//   }

//   return (
//     <div className="max-w-5xl mx-auto my-20">
//       <h1 className="text-3xl font-bold">{product.name}</h1>
//       <Image
//         src={product.image || "/placeholder.jpg"}
//         alt={product.name || "Product image"}
//         width={500}
//         height={500}
//         className="rounded-lg object-cover"
//       />
//       <p>{product.description}</p>
//       <p className="text-xl font-semibold">Price: ${product.price}</p>
//       {product.discountPercentage && (
//         <p className="text-lg text-red-500">
//           Discount: {product.discountPercentage}%
//         </p>
//       )}
//       <p>Rating: {product.rating} / 5</p>
//     </div>
//   );
// };

// export async function generateStaticParams(): Promise<Params[]> {
//   const products: Array<{ slug: { current: string } }> = await client.fetch(
//     `*[_type == "product2"]{
//       "slug": slug.current
//     }`
//   );

//   return products.map((product) => ({
//     slug: product.slug.current,
//   }));
// }

// export default ProductPage;



// import { SignInButton, SignUp, SignedIn, SignedOut } from "@clerk/nextjs";
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import useSWR from 'swr';
// import * as swr from "swr";
// import * as swrInfinite from "swr/infinite";




// const SignUpPage = () => {
//   return (
//     <div className="flex justify-between p-5 pt-12">
//       <div>
//         <Image src="/images/signup.png" alt="image" height={600} width={800} />
//       </div>
//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
//           Create an account
//         </h1>
//         <p className="text-gray-600 text-center mb-6">
//           Enter your details below
//         </p>

        {/* Clerk SignUp component */}
        {/* <SignedOut>
          <SignUp />
        </SignedOut> */}

        {/* Clerk SignIn Button - When the user is signed out */}

        {/* <SignedIn> */}
        {/* <Link href="/login" className="text-blue-500 hover:underline">
        </Link>  */}

          {/* <p>You are already signed in!</p> */}
          {/* <SignInButton />
        </SignedIn> */}

        {/* Sign up with Google Button (Custom) */}
        {/* <div className="mt-6 flex items-center justify-center">
          <button
            type="button"
            className="flex items-center w-full justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          >
    
          </button>
        </div> */}

        {/* Already have an account */}
        {/* <p className="text-center text-sm text-gray-600 mt-6">  */}
          {/* Already have an account?{' '} */}
            {/* Log in */}
        {/* </p> */}
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;



// checkout
// "use client"
// import React from 'react';
// import Image from 'next/image';
// import PaymentForm from '@/components/paymentForm';

// const Checkout = () => {
//   return (
//     <div className=" min-h-screen py-12">
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">
//         {/* Breadcrumb */}
//         <div className="text-sm text-gray-500 mb-8">
//           <span>Account / My Account / Product / View Cart / </span>
//           <span className="text-gray-800 font-semibold">CheckOut</span>
//         </div>

        {/* Main Content */}
        // <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        //   <PaymentForm/>
          {/* Billing Details */}
          {/* <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Billing Details</h2>
            <form className="space-y-4">
              {/* Input Fields */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full  bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
                 
                />
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Company Name</label>
                <input
                  type="text"
                  className="w-full  bg-gray-100 rounded-md px-4 py-2 focus:outline-none "
                 
                />
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Street Address</label>
                <input
                  type="text"
                  className="w-full  bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
                 
                />
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Appartment floor etc.(optional)</label>
                <input
                  type="text"
                  className="w-full  bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
                 
                />
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Town/City</label>
                <input
                  type="text"
                  className="w-full  bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
                 
                />
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                <input
                  type="text"
                  className="w-full  bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
                 
                />
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                <input
                  type="text"
                  className="w-full  bg-gray-100 rounded-md px-4 py-2 focus:outline-none"
                 
                />
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="save-info"
                  className="w-5 h-5 text-red-500 border-gray-300 rounded"
                />
                <label htmlFor="save-info" className="ml-2 text-sm text-gray-600">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>  */}

          {/* Order Summary */}
          {/* <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              Order Items */}
              {/* <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/gaming.png" // Replace with your image path
                      alt="LCD Monitor"
                      height={50}
                      width={50}
                      className="rounded"
                    />
                    <span className="text-gray-700">LCD Monitor</span>
                  </div>
                  <span className="text-gray-700">$650</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/design.jpg" // Replace with your image path
                      alt="Gamepad"
                      height={50}
                      width={50}
                      className="rounded"
                    />
                    <span className="text-gray-700">Hi Gamepad</span>
                  </div>
                  <span className="text-gray-700">$1100</span>
                </div>
              </div> */}
              {/* Subtotal and Total */}
              {/* <div className="mt-6 border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal:</span>
                  <span>$1750</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-gray-900">
                  <span>Total:</span>
                  <span>$1750</span>
                </div>
              </div>

              {/* Payment Method */}
              {/* <div className="mt-6">
                <h3 className="text-gray-700 font-medium mb-4">Payment Method</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="bank"
                      name="payment"
                      className="w-5 h-5 text-red-500 border-gray-300 focus:ring focus:ring-red-400"
                    />
                    <label htmlFor="bank" className="ml-2 text-gray-600">
                      Bank
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cod"
                      name="payment"
                      className="w-5 h-5 text-red-500 border-gray-300 focus:ring focus:ring-red-400"
                    />
                    <label htmlFor="cod" className="ml-2 text-gray-600">
                      Cash on delivery
                    </label>
                  </div>
                </div>
              </div> */}

              {/* Coupon Code */}
              {/* <div className="mt-6 flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-red-400"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                  Apply Coupon
                </button>
              </div> */}

              {/* Place Order Button */}
              {/* <button className="bg-red-500 text-white w-full mt-6 py-3 rounded-md hover:bg-red-600 transition">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; */} 


// "use client"
// import { useState } from 'react';

// const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSearch = () => {
//     setLoading(true);
//     onSearch(searchQuery);
//   };

//   return (
//     <div className="flex justify-center items-center space-x-4">
//       <div className="relative w-full max-w-xs">
//         {/* Search Bar */}
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//           placeholder="Search products..."
//           className="w-full px-4 py-2 border rounded-lg"
//         />

//         {/* Loading Placeholder */}
//         {loading && (
//           <div className="absolute right-4 top-1/2 transform -translate-y-1/2 animate-pulse">
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         )}
//       </div>

//       <button
//         onClick={handleSearch}
//         disabled={loading}
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchBar;


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
