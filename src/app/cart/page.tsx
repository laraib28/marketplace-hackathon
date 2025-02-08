"use client";

import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../redux/cartslise";
import { RiDeleteBin6Line } from "react-icons/ri";
import Link from "next/link";

// CartItem ka interface define kar lo
interface CartItem {
  id: string;
  price: number;
  quantity: number;
  image: string;
  title: string;
  // Agar aur properties hain to add kar sakte ho
}

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  // cartItems ko proper type se cast karo
  const cartItems = useSelector((state: RootState) => 
    state.cart.items.map(item => ({
      ...item,
      price: Number(item.price)
    }))
  ) as CartItem[];

  // calculateTotal function ab type-safe hai
  const calculateTotal = (): number => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="text-sm mb-6 text-gray-500">
          Home / <span className="text-black">Cart</span>
        </div>
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="overflow-x-auto border border-gray-200 shadow-sm rounded-lg bg-white">
          <table className="w-full text-gray-700 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Subtotal</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <tr key={item.id} className="border-b last:border-b-0">
                    <td className="p-4 flex items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="w-16 h-16 object-cover"
                      />
                      {item.title}
                    </td>
                    <td className="p-4">${item.price}</td>
                    <td className="p-4 flex items-center gap-2">
                      <button
                        className="bg-gray-200 px-3 py-1 rounded"
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="bg-gray-200 px-3 py-1 rounded"
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        +
                      </button>
                    </td>
                    <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="p-4">
                      <button
                        className="text-red-500"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        <RiDeleteBin6Line size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center p-4 text-gray-500">
                    Your cart is empty.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Coupon</h2>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded-md">
                Apply Coupon
              </button>
            </div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold">${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Shipping:</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between border-t pt-4">
              <span className="text-gray-600">Total:</span>
              <span className="font-bold text-lg">${calculateTotal().toFixed(2)}</span>
            </div>
            <Link href="/checkout">
              <button className="w-full bg-red-500 text-white mt-4 py-2 rounded-md">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
