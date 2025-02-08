import React from 'react'
import Image from 'next/image'

const Electronics = () => {

  const products = [
    { 
      id: "1",
      image:"/images/design.jpg",
      name:"IPSL LCD Gaming Monitor",
      price:"$259"
    },
    { 
      id: "2",
      image:"/images/keboard.png",
      name:"AK-900 Wired Keyboard",
      price:"$624"
    },
    { 
      id: "3",
      image:"/images/speaker.png",
      name:"RGB liquid CPU Cooler",
      price:"$160"
    },
    { 
      id: "4",
      image:"/images/p3.png",
      name:"ASUS FHD Gaming Laptop",
      price:"$700"
    },
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Electronics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col items-center bg-white rounded-md shadow-lg p-4 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            {/* Product Image */}
            <div className="h-64 w-full flex justify-center mb-4">
              <Image
                src={product.image}
                alt={product.name}
                height={200}
                width={200}
                className="object-cover h-full w-full rounded-md"
              />
            </div>

            {/* Product Name */}
            <div className="text-center mb-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
            </div>

            {/* Price */}
            <div className="flex flex-col items-center w-full mt-2">
              <div className="text-red-600 font-bold text-xl">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Electronics;
