"use client"
import { addToCart } from "@/app/redux/cartslise";
import Sales from "@/components/home/sales";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useRouter, useParams } from "next/navigation"; // Correct import for Next.js 13+

// Client-side component rendering
const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Sales | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = useParams(); // Fetch the slug dynamically from the router

  // Fetch product data once slug is available
  useEffect(() => {
    if (slug) {
      const fetchProduct = async () => {
        const query = `*[_type == "product2" && slug.current == $slug] {
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
          const products: Sales[] = await client.fetch(query, { slug });
          if (products.length > 0) {
            setProduct(products[0]);
          } else {
            router.push("/404"); // Handle case where no product is found
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [slug, router]);

  // In your Sales Component, ensure that the `handleAddToCart` is working properly.
const handleAddToCart = (product: Sales) => {
  dispatch(
    addToCart({
      id: product._id, // Ensure unique identifier
      title: product.name,
      // slug: product.slug.current,
      price: product.price.toString(),
      quantity: 1, // Initial quantity
      image: product.imageUrl || "",
    })
  );

  toast.success(`Added ${product.name} to cart`);
};


  if (loading) {
    return <div>Loading...</div>; // Handle loading state
  }

  if (!product) {
    return <div>Product not found</div>; // Handle no product found case
  }

  return (
    <main className="max-w-5xl my-20 mx-auto p-4 flex flex-col md:flex-row gap-8 items-center">
      {/* Left Side - Product Image */}
      <div className="flex-1 max-w-[400px]">
        <Image
          src={product.imageUrl || "/placeholder.jpg"}
          alt={product.name || "Product Image"}
          height={600}
          width={600}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Right Side - Product Details */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold my-4">{product.name}</h2>

        <p className="text-lg mb-4">{product.description}</p>

        {/* Price */}
        <p className="text-2xl font-semibold mt-4">Price: ${product.price}</p>

        {/* Discount */}
        {product.discountPercentage && (
          <p className="text-lg text-red-500">
            Discount: {product.discountPercentage}% OFF
          </p>
        )}

        {/* Price Without Discount */}
        {product.priceWithoutDiscount && (
          <p className="line-through text-gray-500">
            Original Price: ${product.priceWithoutDiscount}
          </p>
        )}

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center mt-4">
            <p className="text-xl">{product.rating} / 5</p>
            <p className="ml-2 text-sm text-gray-500">
              ({product.ratingCount} reviews)
            </p>
          </div>
        )}

        {/* Tags / Badge */}
        {product.badge && (
          <span className="mt-4 text-sm font-semibold text-white bg-blue-500 rounded-full px-3 py-1">
            {product.badge}
          </span>
        )}
      </div>

      {/* Add to Cart Button */}
      <button
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out"
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>
    </main>
  );
};

export default ProductPage;
