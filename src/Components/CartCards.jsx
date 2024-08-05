import React from 'react'
import bin from '../assets/Bin.svg'


function CartCards( {product, item, changeQuantityCart,clearCartitem  }) {
    const handleMinusClick = (event) => {
        event.stopPropagation(); 
        changeQuantityCart(item.id, 'minus');
      };
    
      const handlePlusClick = (event) => {
        event.stopPropagation(); 
        changeQuantityCart(item.id, 'plus');
      };
      const handleDeleteClick = (event) => {
        event.stopPropagation(); 
        clearCartitem(item.id);
      };
      const words = product.title.split(' '); 
      const limitedTitle = words.length > 1 ? `${words[0]} ${words[1]} ${words[2]}` : product.title;

  return (
    <div key={item.id} className=" w-full h-auto hover:border-b justify-items-center mb-1">
              <div className='flex p-1'>  
                <img className='h-10 w-fit' src={product.image} alt={limitedTitle} />
                <div className="px-3 text-sg text-center">
                  <h3>{limitedTitle}</h3>
                  <p className='hover:font-bold'>${product.price}</p>
                  </div>
                </div>
                  <div className="quantity py-1 ml-auto mr-auto ">
                  <button className='bg-red-700 mx-6 h-5 w-5 pb-5 rounded-sm bg-center items-center justify-center' onClick={handleMinusClick}>-</button>
      <span className='h-5 w-5 pb-5'>{item.quantity}</span>
      <button className='bg-blue-700 h-5 w-5 mx-6 text-white rounded-sm items-center justify-center' onClick={handlePlusClick}>+</button>
      <button className='pl-5 h-5 w-5 mx-6 text-black rounded-sm items-center justify-center' onClick={handleDeleteClick}>
Delete

      </button>
                  </div>
              </div>
  )
}

export default CartCards