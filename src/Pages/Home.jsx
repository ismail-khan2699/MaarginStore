import React from 'react';
import Store from '../Components/Products';
import { useState, useEffect } from 'react';

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);

      if (width >= 1024) {
        setLimit(3);
      } else {
        setLimit(2);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div>

<div className='bgHome text-white text-4xl px-10 pb-3 pt-4 mt-6 mx-2 rounded-lg '>Shop By Category :</div>


      <div className='bgHome text-white text-3xl px-10 pb-3 pt-4 mt-6 mx-6 rounded-lg '>Men's Products</div>
      <div className='w3/4 self-center pl-10 bg-gray-800 bg-opacity-40 mx-7 pb-5 pt-3 pr-4 rounded-b-lg'>
      <Store category="men's clothing" limit={limit}  showSort={false}/>
      </div>
      <div className='bgHome text-white text-3xl px-10 pb-3 pt-4 mt-6 mx-6 rounded-lg '>Electronics</div>
      <div className='w3/4 self-center pl-10 bg-gray-800 bg-opacity-40 mx-7 pb-5 pt-3 pr-4 rounded-b-lg'>
      <Store category="electronics" limit={limit}  showSort={false}/>
      </div>
      <div className='bgHome text-white text-3xl px-10 pb-3 pt-4 mt-6 mx-6 rounded-lg '>Women's Products</div>
      <div className='w3/4 self-center pl-10 bg-gray-800 bg-opacity-40 mx-7 pb-5 pt-3 pr-4 rounded-b-lg'>
      <Store category="women's clothing" limit={limit}  showSort={false}/>
      </div>
      <div className='bgHome text-white text-3xl px-10 pb-3 pt-4 mt-6 mx-6 rounded-lg '>Jewelery</div>
      <div className='w3/4 self-center pl-10 bg-gray-800 bg-opacity-40 mx-7 pb-5 pt-3 pr-4 rounded-b-lg'>
      <Store category="jewelery" limit={limit}  showSort={false}/>
      </div>
    </div>
  );
};

export default Home;
