import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
var Quantity =0;
function ProductCard({ item }) {
  return (
    <div className="bg-white bg-opacity-50 opacity-95 hover:scale-105 p-4 shadow-md max-w-[346px] rounded-lg h-130 max-sm:h-90 max-md:h-90 relative">
      <Link to={`/item/${item.id}`} key={item.id}>
        <img src={item.image} alt={item.title} className="w-full h-64 max-sm:h-52 max-md:h-52 object-fill p-4 mb-4" />
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-gray-600">${item.price}</p>
        <p className="text-gray-900 pb-6">
          Rating: {item.rating.rate}/5
        </p>
      <button className="text-gray-900 mx-16 rounded-full bottom-2 absolute left-0 right-0 text-center mt-6 bg-blue-600 bg-opacity-60 hover:scale-105">Add To Cart</button>
      </Link>
    
    </div>
  );
}

export default ProductCard;
