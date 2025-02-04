import React from 'react'

const RestaurantMenu = () => {
    const menuItems = [
        { id: 1, name: "Burger", price: "$5.99", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Pizza", price: "$8.99", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Pasta", price: "$7.49", image: "https://via.placeholder.com/150" },
        { id: 4, name: "Salad", price: "$4.99", image: "https://via.placeholder.com/150" },
        { id: 5, name: "Tacos", price: "$6.99", image: "https://via.placeholder.com/150" },
        { id: 6, name: "Fries", price: "$3.99", image: "https://via.placeholder.com/150" },
      ];
  return (
    <div className=" p-6 ">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Restaurant Menu
    </h1>

    
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {menuItems.map((item) => (
        <div key={item.id} className="bg-orange-100 p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
          <h2 className="text-xl font-semibold mt-3">{item.name}</h2>
          <p className="text-gray-600">{item.price}</p>
          <div className='flex gap-2'>
          <button className="mt-3 w-full bg-green-400 text-white py-2 rounded-md hover:bg-green-600 transition">
            Edit
          </button>
          <button className="mt-3 w-full bg-red-400 text-white py-2 rounded-md hover:bg-green-600 transition">
            Delete
          </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}



export default RestaurantMenu;
