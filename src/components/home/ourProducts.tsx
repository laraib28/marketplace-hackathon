"use client";
import { addToCart } from "@/app/redux/cartslise";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

interface Product {
  discountPercentage: string;
  priceWithoutDiscount: number | null;
  rating: number;
  imageUrl: string;
  _id: string;
  name: string;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  price: number;
  ratingCount: number;
  tags: string[];
  badge: string;
  slug: {
    current: string;
  };
}

const OurProducts: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[] | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product2" && "our products" in tags[]] {
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
      }`;
      try {
        console.log("Sanity Query:", query);
        const fetchedProducts: Product[] = await client.fetch(query);
        console.log("Fetched Products:", fetchedProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: product._id,
        title: product.name,
        price: product.price.toString(),
        quantity: 1,
        image: product.imageUrl || "",
      })
    );
    toast.success(`Added ${product.name} to cart`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!products || products.length === 0) {
    return <div>Product not found</div>;
  }

  return (
    <div className="px-4 py-8">
    {/* Header Section */}
    <div className="flex flex-col lg:flex-row items-center justify-between mb-8 space-y-6 lg:space-y-0 ml-16">
      <div className="text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start">
          <Image
            src="/images/Rectangle 18.png"
            alt="icon"
            width={20}
            height={20}
            className="m-5"
          />
          <h1 className="text-red-700 text-2xl font-bold">Today&#39;s</h1>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold mt-2">Selling Products</h2>
      </div>

      {/* Timer Section */}
     

      {/* Navigation Arrows */}
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-300 transition">
          <FaLongArrowAltLeft className="text-xl" />
        </div>
        <div className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition">
          <FaLongArrowAltRight className="text-xl" />
        </div>
      </div>
    </div>

    {/* Product Cards */}
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <Link href={`/sellingProductS/${product.slug.current}`}>

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
      (product.price - (product.price * (parseFloat(product.discountPercentage) || 0)) / 100)
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
  </div>
);
};

export default OurProducts;
