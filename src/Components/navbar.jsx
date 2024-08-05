import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import jdwImage from './../assets/jdw.png';
import TemporaryDrawer from './Cart';

const Navbar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const handleMouseEnter = (menu) => {
    setOpenMenus({ ...openMenus, [menu]: true });
  };


  const handleMouseLeave = (menu) => {
    setTimeout(() => {
      setOpenMenus({ ...openMenus, [menu]: false });
    }, 500);
  };

  return (
    <div id="navBar" className="col-span-1 row-span-1 border-b-2">
      <nav className=" border-gray-200 rounded-lg bgS sticky">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src={jdwImage}
              className="h-20"
              alt="Margin Store"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap gradient-text">
              Margin Store
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="#" className="text-sm text-blue-600 dark:text-blue-500 hover:underline hover:bg-slate-100 hover:bg-opacity-30 py-2 px-4 rounded-lg">
              Login
            </a>
            <a href="#" className="text-sm text-blue-600 dark:text-blue-500 hover:underline hover:bg-slate-100 hover:bg-opacity-30 py-2 px-4 rounded-lg">
              Sign up
            </a>
           <TemporaryDrawer/>
            
      </div>

    </div>
      </nav>
      <nav className="bgContt">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center justify-evenly">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              {/* Repeat the list items structure */}
              <li className="relative">
                <Link to="/" className="cText hover:underline" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="relative"
        onMouseEnter={() => handleMouseEnter('planPricing')}
        onMouseLeave={() => handleMouseLeave('planPricing')}>
        <div className="relative">
          <Link to="/Products" className="cText hover:underline">Products</Link>
          <ul className={`absolute bg-opacity-80 shadow-md py-2 mt-2 w-48 ${openMenus['planPricing'] ? 'block' : 'hidden'}`}>
            <li><Link to="/PM" className="block w-full px-4 py-2 text-black">men's clothing</Link></li>
            <li><Link to="/PWM" className="block w-full px-4 py-2 text-black">women's clothing</Link></li>
            <li><Link to="/PJ" className="block w-full px-4 py-2 text-black">jewelery</Link></li>
            <li><Link to="/PE" className="block w-full px-4 py-2 text-black">electronics</Link></li>
          </ul>
        </div>
      </li>
      <li className="relative">
                <Link to="/About" className="cText hover:underline" aria-current="page">
                  About Us
                </Link>
              </li>
              <li className="relative">
                <Link to="/Privacy" className="cText hover:underline" aria-current="page">
                  Privacy Policy
                </Link>
              </li>
              {/* ... Rest of your list items */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
