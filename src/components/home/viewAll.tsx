"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/cartslise";

interface ViewAll {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  discountPercentage?: number;
  priceWithoutDiscount: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  badge: string;
  slug: string;
}

const ViewAll: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ViewAll[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from Sanity
  const fetchProducts = async () => {
    try {
      const data = await client.fetch(
        `*[_type == "product2"] {
          _id,
          name,
          slug,
          description,
          "imageUrl": image.asset->url,
          price,
          discountPercentage,
          priceWithoutDiscount,
          rating,
          ratingCount,
          tags,
          badge
        }`
      );
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  // Handle Add to Cart
  const handleAddToCart = (product: ViewAll) => {
    const cartItem = {
      id: product._id,
      title: product.name,
      ...product,
      price: product.price.toString(), // Convert price to string
      quantity: 1,
      size: "M", // Default size
      color: "red", // Default color
      image: product.imageUrl,
    };
    dispatch(addToCart(cartItem));
  };
return (
  <>
    {/* Product Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {loading ? (
        <div className="col-span-4 text-center">
          <p>Loading products...</p>
        </div>
      ) : products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className="relative flex flex-col items-center">
            {/* Product Card */}
            <div className="rounded-md p-4 flex flex-col items-center bg-gray-50 shadow-md">
              <div className="bg-red-500 rounded-sm text-white text-xs px-3 py-1 self-start">
                {product.discountPercentage && `${product.discountPercentage}% off`}
              </div>
              <div className="absolute top-2 right-2 flex flex-col space-y-2 pr-6">
                <CiHeart className="text-2xl font-bold cursor-pointer hover:text-red-700 transition" />
                <IoEyeOutline className="text-xl cursor-pointer hover:text-gray-700 transition" />
              </div>
              <div>
                <Link href='viewAllS/product.slug'>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    height={200}
                    width={200}
                    className="object-cover w-[200px] h-[200px]"
                  />
                </Link>
              </div>
            </div>
            <div className="text-center mt-2">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <div className="flex items-center justify-center space-x-2">
                <p className="text-red-600 font-bold text-lg">
                  {product.price != null && !isNaN(product.price) && product.price >= 0
                    ? (
                      (product.price - (product.price * (product.discountPercentage || 0)) / 100)
                        .toFixed(2)
                    )
                    : "0.00"} {/* Fallback if price is invalid */}
                </p>
                <p className="text-gray-400 text-sm line-through">
                  {product.priceWithoutDiscount != null && !isNaN(product.priceWithoutDiscount) && product.priceWithoutDiscount >= 0
                    ? product.priceWithoutDiscount.toFixed(2)
                    : "0.00"} {/* Fallback if priceWithoutDiscount is invalid */}
                </p>
              </div>
              <div className="flex items-center justify-center mt-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <AiFillStar
                    key={index}
                    className={`${
                      index < product.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* Add to Cart Button */}
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <div className="col-span-4 text-center">
          <p>No products found.</p>
        </div>
      )}
    </div>
    <div className="flex justify-center mt-6">
      <Link href="/viewAll">
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
          View All Products
        </button>
      </Link>
    </div>
  </>
);
};

export default ViewAll;

