'use client'; // Add this line to make the component a Client Component

import { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept a variety of payment methods including credit cards (Visa, MasterCard, American Express), debit cards, PayPal, and other secure payment gateways like Stripe.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this number to track the status of your order on the carrier's website.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer international shipping. Shipping rates and times vary depending on the destination country. You can check the estimated shipping cost during checkout.",
    },
    {
      question: "How long will it take to receive my order?",
      answer:
        "Orders typically ship within 1-3 business days. Delivery times vary based on your location and the shipping method chosen at checkout. International orders may take longer.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "Once an order is placed, we process it as quickly as possible. If you wish to make changes or cancel, please contact us immediately. Once the order has been shipped, we are unable to make changes.",
    },
    {
      question: "What should I do if I receive a damaged or incorrect item?",
      answer:
        "If you receive a damaged or incorrect item, please contact us within 7 days of receiving your order. We will guide you through the return or exchange process and resolve the issue.",
    },
    {
      question: "Do you offer returns or exchanges?",
      answer:
        "Yes, we offer a 30-day return policy. If you're not satisfied with your purchase, you can return it within 30 days for a full refund or exchange, as long as the item is unused and in original condition.",
    },
    {
      question: "How do I return an item?",
      answer:
        "To return an item, simply contact our customer service team for instructions on how to send it back. You may be required to cover return shipping costs depending on the circumstances.",
    },
    {
      question: "Can I buy items in bulk?",
      answer:
        "Yes, we offer bulk purchasing options. Please contact our sales team for more details and pricing on bulk orders.",
    },
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' or 'Create Account' button at the top of the page. You will be asked to provide your name, email address, and password.",
    },
    {
      question: "Do I need an account to place an order?",
      answer:
        "No, you can check out as a guest. However, creating an account allows you to save your information for faster checkout and track your order history.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we take the security of your personal information very seriously. We use industry-standard encryption to protect your data during transactions and follow strict privacy policies.",
    },
    {
      question: "Do you offer gift cards?",
      answer:
        "Yes, we offer gift cards in various denominations. They can be purchased through our website and used during checkout.",
    },
    {
      question: "How do I apply a promo code?",
      answer:
        "To apply a promo code, enter the code in the 'Promo Code' field during checkout and click 'Apply.' The discount will be applied to your total order.",
    },
    {
      question: "What if the item I want is out of stock?",
      answer:
        "If an item is out of stock, you can sign up to receive a notification when it becomes available again. You can also check back later or browse similar items.",
    },
    {
      question: "Can I change my shipping address after placing an order?",
      answer:
        "If your order has not yet shipped, please contact us immediately to update your shipping address. Once the order has been dispatched, we cannot make changes to the shipping address.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-xl font-medium">{faq.question}</h2>
              <span className="text-lg">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="text-gray-600 text-sm py-2">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
