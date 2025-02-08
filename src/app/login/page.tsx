import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react';
// import { User } from 'lucide-react';
const Login = () => {
  return (
    <div className="flex justify-between p-5 pt-12">
      {/* Image Section */}
      <div>
        <Image src="/images/signup.png" alt="Login Illustration" height={600} width={600} />
      </div>
      {/* <SignedIn>
        <UserButton />
      </SignedIn> */}
      {/* Login Form Section */}
      <div className="w-full max-w-md bg-white p-6 pt-40">
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-2">Log in to Exclusive</h1>
        <p className="text-gray-600 text-center mb-6">Enter your details below</p>

        <form>
          {/* Email or Phone Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email or Phone Number
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email or Phone Number"
              className="mt-1 block w-full px-4 py-2 border-b border-gray-300 focus:ring-0 focus:border-blue-500 text-gray-900"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="mt-1 block w-full px-4 py-2 border-b border-gray-300 focus:ring-0 focus:border-blue-500 text-gray-900"
              required
            />
          </div>
        </form>

        {/* Log In Button */}
        <div className="flex flex-col items-center">
          <button
            type="submit"
            className="w-32 h-14 bg-red-500 text-white font-medium py-2 rounded-sm hover:bg-red-600 transition mb-4"
          >
            {/* <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut> */}
          </button>
          <Link href="" className="text-red-500">
            Forgot Password
          </Link>
        </div>

        {/* Create Account Section */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">Don&apos;t have an account?</p>
          <Link href="/signup" className="text-red-500 font-medium hover:underline">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
