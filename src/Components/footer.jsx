import React from 'react';
import { Link } from 'react-router-dom';
import jdwImage from './../assets/jdw.png';

const Footer = () => {
  return (
    <div id="Footer" className="row-span-1 border-t-2 bgContt">
      <footer className="cText body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center cText">
            <img
      src={jdwImage}
      alt="SEO Tooler"
      style={{ width: '4rem', height: '4rem', borderRadius: '50%', backgroundColor: 'white' }}
    />
              <span className="ml-3 text-2xl">Margin Store</span>
            </Link>
            <p className="mt-2 text-base font-semibold text-black ">We Offer you GAURENTEE</p>
          </div>
          
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium cText tracking-widest text-sm mb-3">ABOUT</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/" className="cText">
                  What We Offer
                </Link>
              </li>
              <li>
                <Link to="/" className="cText">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="cText">
                  Certificates
                </Link>
              </li>
              <li>
                <Link to="/" className="cText">
                  Blog
                </Link>
              </li>
            </nav>
          </div>
          {/* ... Add the rest of your sections */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium cText tracking-widest text-sm mb-3">Products</h2>
            <nav className="list-none mb-10">
            <li><Link to="/Products" >All Products</Link></li>
            <li><Link to="/PM" >men's clothing</Link></li>
            <li><Link to="/PWM" >women's clothing</Link></li>
            <li><Link to="/PJ" >jewelery</Link></li>
            <li><Link to="/PE" >electronics</Link></li>
            </nav>
          </div>
        </div>
      </footer>

      <footer className="cText rounded-lg shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 bgContt antialiased d-flex flex-column" style={{ width: "100%" }}>
        <p className="mb-4 text-sm text-center cText sm:mb-0">
          &copy; <Link to="/" className="hover:underline">2023 Margin Store</Link>. All rights reserved.
        </p>
        {/* Social media icons */}
        <div className="flex justify-center items-center space-x-1">
          <Link to="/Privacy" className="cText hover:underline">
            Privacy Policy
          </Link>
          {/* Add other social media icons as Link components */}
          {/* ... */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
