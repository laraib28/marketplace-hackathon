import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <span>Home / </span>
          <span className="text-gray-800 font-semibold">About</span>
        </div>

        {/* Our Story Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <div className="lg:mt-6">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-950 mb-4">
                Incepted in 2015, Evolution is South Asia&apos;s premier online shopping marketplace with an active presence in multiple countries. Evolution has a wide array of products and services to cater to the needs of our diverse customers. From high-quality electronics to fashion and lifestyle products, we bring you everything under one roof.
              </p>
              <p className="text-gray-600">
                Evolution has more than 10 million products in its catalog, growing at a rapid pace. This makes it a customer destination for convenience, simplicity, trust, and service.
              </p>
            </div>
            {/* Image Section */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/about.main.png"
                alt="Our Story"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center gap-6">
          <div>
            <Image src="/images/rewie1.png" alt="Review 1" height={200} width={200} />
          </div>
          <div>
            <Image src="/images/rewie2.png" alt="Review 2" height={200} width={200} />
          </div>
          <div>
            <Image src="/images/rewiew3.png" alt="Review 3" height={200} width={200} />
          </div>
          <div>
            <Image src="/images/rewie4.png" alt="Review 4" height={200} width={200} />
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <Image
                src="/images/about1.png"
                alt="Tom Cruise"
                width={200}
                height={200}
                className="mx-auto bg-gray-300"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">Tom Cruise</h3>
              <p className="text-gray-600">Founder &amp; CEO</p>
              <div className="flex justify-center mt-2 space-x-4">
                <Link href="#" className="text-gray-500 hover:text-blue-500">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-blue-300">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-blue-700">
                  <i className="fab fa-linkedin"></i>
                </Link>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <Image
                src="/images/about2.png"
                alt="Emma Watson"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">Emma Watson</h3>
              <p className="text-gray-600">Managing Director</p>
              <div className="flex justify-center mt-2 space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-700">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <Image
                src="/images/about3.png"
                alt="Will Smith"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">Will Smith</h3>
              <p className="text-gray-600">Product Designer</p>
              <div className="flex justify-center mt-2 space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-700">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <i className="fas fa-shipping-fast text-3xl text-red-500 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-800">Free and Fast Delivery</h3>
            <p className="text-gray-600">Free delivery for all orders over $140</p>
          </div>
          <div className="text-center">
            <i className="fas fa-headset text-3xl text-red-500 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-800">24/7 Customer Service</h3>
            <p className="text-gray-600">Friendly 24/7 customer support</p>
          </div>
          <div className="text-center">
            <i className="fas fa-shield-alt text-3xl text-red-500 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-800">Money Back Guarantee</h3>
            <p className="text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;