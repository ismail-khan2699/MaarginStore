import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import Spinner from '../Components/spinner';

function Item() {
  const [product, setProduct] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const { itemId } = useParams();
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product.id);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [itemId]);

  if (!product) {
    return <div className='p-10 m-10'><Spinner/></div>;
  }
  const words = product.title.split(' '); 
  const limitedTitle = words.length > 5 ? `${words[0]} ${words[1]} ${words[2]} ${words[3]} ${words[4]} ${words[5]}` : product.title;

  return (
    <>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            className="lg:w-1/2 max-w-fit w-full opacity-80 lg:h-auto h-64 object-fill object-center rounded"
            src={product.image} alt={product.title}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{limitedTitle}</h1>
            <div className="flex mb-4">
              <span className="text-gray-600 ml-3">{product.rating.rate}/5 Reviews</span>
            </div>
            <p className="leading-relaxed">
             {product.description}
            </p>
            
            <div className="flex p-4">
              
              <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
              {/* Add to Cart and Wishlist buttons */}
              <button onClick={() => handleAddToCart(product.id)}
              className="flex ml-auto text-white border-0 py-2 px-6 focus:outline-none rounded bg-b-c">
                Add To Cart
              </button>
            </div>
            <span>{product.count}</span>
          </div>
        </div>
      </div>
      {showAlert && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded fixed top-10 right-10 z-50" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">Item added to cart.</span>
          </div>
        )}
    </section>

</>

  );
}

export default Item;
