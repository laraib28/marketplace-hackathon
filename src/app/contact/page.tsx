import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <span>Home / </span>
          <span className="text-gray-800 font-semibold">Contact</span>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white p-6 rounded-lg shadow-md">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8 border-r pr-6">
            {/* Call Us */}
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-2xl">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Call To Us</h3>
                <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
                <p className="text-gray-800 font-medium mt-2">Phone: +8801811112222</p>
              </div>
            </div>
            <hr />
            {/* Write To Us */}
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-2xl">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Write To Us</h3>
                <p className="text-gray-600">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-gray-800 font-medium mt-2">Emails: customer@exclusive.com</p>
                <p className="text-gray-800 font-medium">Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-red-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-red-500"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-red-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-red-500"
            />
            <div className="text-right">
              <button className="bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
