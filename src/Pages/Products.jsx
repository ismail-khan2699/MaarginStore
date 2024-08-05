import React from 'react'
import Store from '../Components/Products';
import { Link } from 'react-router-dom';
function Products({ category }) {
  return (
    <div>
      <h1 className='m-4 p-4 text-4xl gradient-text'>{category ? `${category.charAt(0).toUpperCase()}${category.slice(1)} Products` : 'All Products'}</h1>
      <div className='flex m-3'>
      <div className='h-10 w-1/4'>
      <h2 className="font-semibold text-2xl mb-4 gradient-text">Categories</h2>
 
    <ul className='mr-16 rounded-full'>
    <li><Link to="/Products" className="block w-full px-4 py-2 gradienttext2 text-xl">All</Link></li>
    <li><Link to="/PM" className="block w-full px-4 py-2 gradienttext2 text-xl">men's clothing</Link></li>
            <li><Link to="/PWM" className="block w-full px-4 py-2 gradienttext2 text-xl">women's clothing</Link></li>
            <li><Link to="/PJ" className="block w-full px-4 py-2 gradienttext2 text-xl">jewelery</Link></li>
            <li><Link to="/PE" className="block w-full px-4 py-2 gradienttext2 text-xl">electronics</Link></li>
    </ul>
      </div>
      <div className='w-3/4'>
      <Store category={category}  showSort={true}/>
      </div>
    </div>
    </div>
  )
}


export default Products