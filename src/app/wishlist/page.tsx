// components/WishlistPage.tsx
"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistslice";
import { RootState } from "../redux/store";

const WishlistPage = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (id: string) => {
    dispatch(removeFromWishlist(id)); // Remove the item from the wishlist
  };

  return (
    <div>
      <h1>Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <ul>
          {wishlistItems.map((item: string) => (
            <li key={item}>
              <span>{item}</span> {/* Replace with actual product details */}
              <button onClick={() => handleRemoveFromWishlist(item)}>
                Remove from Wishlist
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;
