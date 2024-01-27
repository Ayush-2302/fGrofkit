import React from 'react'

function Restorent() {
  return (
    <div>{/* Featured Restaurants Section */}
    <div className="bg-gray-200 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-center">
          Featured Restaurants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Restaurant Image */}
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVhbHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Restaurant 1"
                className="w-full h-44  object-cover rounded-md"
              />
            </div>
            {/* Restaurant Details */}
            <h3 className="text-xl font-bold mb-2">Italian Delights</h3>
            <p className="text-gray-600">
              Authentic Italian cuisine that will leave you craving for more.
            </p>
          </div>

          {/* Restaurant 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Restaurant Image */}
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww"
                alt="Restaurant 2"
                className="w-full h-44  object-cover rounded-md"
              />
            </div>
            {/* Restaurant Details */}
            <h3 className="text-xl font-bold mb-2">Burger Haven</h3>
            <p className="text-gray-600">
              Satisfy your burger cravings with our mouthwatering selection.
            </p>
          </div>

          {/* Restaurant 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Restaurant Image */}
            <div className="mb-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1689596510457-73a8eae21208?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FsYWRzfGVufDB8fDB8fHww"
                alt="Restaurant 3"
                className="w-full h-44   object-cover rounded-md"
              />
            </div>
            {/* Restaurant Details */}
            <h3 className="text-xl font-bold mb-2">Fresh Salads</h3>
            <p className="text-gray-600">
              Healthy and delicious salads made with the freshest ingredients.
            </p>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Restorent