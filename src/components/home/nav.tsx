'use client'; // Add this line to make the component a Client Component

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store"; // Your redux store path
import { CiSearch, CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { Button } from "@/components/ui/button"; // Adjust according to your project structure
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

function Nav() {
  const item = useSelector((state: RootState) => state.cart);
  const cartItemCount = item.items.length; // Get total item count

  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-white shadow">
      {/* Brand Name */}
      <div className="flex items-center pl-16">
        <h1 className="text-black font-bold text-2xl">Exclusive</h1>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex gap-10 text-gray-900 font-medium">
        <li className="hover:underline transition-all duration-300 hover:border-gray-500">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline transition-all duration-300">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover:underline transition-all duration-300">
          <Link href="/about">About</Link>
        </li>
      </ul>

      {/* Search Bar */}
      {/* <Link href='/placeholder'> */}
      <div className="relative hidden md:block">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full text-sm bg-gray-100 rounded-md border-gray-200 px-4 pr-36 py-2"
        />
        <CiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 text-lg" />
      </div>
      {/* </Link> */}
      {/* Icons */}
      <div className="hidden md:flex gap-6 mr-16">
        <Link href='/wishlist'>
          <CiHeart className="text-gray-900 text-2xl cursor-pointer hover:text-black" />
        </Link>
        <Link href="/cart">
          <div className="relative">
            <BsCart3 className="text-gray-900 text-2xl cursor-pointer hover:text-black" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartItemCount}
              </span>
            )}
          </div>
        </Link>
        <div>
          <Link href='/login'>
          <Image 
          src='/images/login.png'
          alt='login'
          width={25}
          height={25}/>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-2 md:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about">About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">Contact</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/sign-up">Sign Up</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/cart">Cart</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/wishlist">Wish List</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

export default Nav;
