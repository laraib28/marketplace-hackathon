import React from 'react'
import Image from 'next/image'

const Grocery = () => {

  const products = [
    { 
      id: "1",
      image:"/images/pet.jpeg",
      name:"Pet Food",
      price:"$159"
    },
    { 
      id: "2",
      image:"/images/oil.jpeg",
      name:" Oil",
      price:"$100"
    },
    { 
      id: "3",
      image:"/images/cookie.jpeg",
      name:"Cookies",
      price:"$160"
    },
    { 
      id: "4",
      image:"/images/bread.jpeg",
      name:"Bread",
      price:"$700"
    },
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Grocery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col items-center bg-white rounded-md shadow-lg p-4 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            {/* Product Image */}
            <div className="h-64 w-full flex justify-center mb-4 bg-gray-100">
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

export default Grocery;
