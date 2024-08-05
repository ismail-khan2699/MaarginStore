import React from 'react';

function About() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">About Margin Store</h1>
      <p className="text-lg leading-relaxed mb-6">
        At Margin Store, we're passionate about offering an exquisite range of products, from trendy clothing to elegant jewelry. Founded in [year], our journey began with a vision to provide high-quality, stylish items that inspire confidence and elevate everyday experiences.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Our commitment to customer satisfaction and premium quality drives everything we do. Whether it's the latest fashion trends in clothing or timeless pieces of jewelry, we strive to offer diversity, value, and exceptional customer service.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Margin Store believes in staying ahead in the dynamic world of fashion and design. Our dedicated team curates collections that reflect current styles while maintaining a timeless appeal.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        While we take pride in our product range, our success is defined by the satisfaction and confidence our customers gain when they shop with us.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Join Margin Store in discovering the latest trends and timeless classics. Explore our offerings and embrace your style with us. Thank you for being a part of our journey!
      </p>
      <p className="text-lg leading-relaxed mb-6">
        &copy; {currentYear} Margin Store. All Rights Reserved.
      </p>
    </div>
  );
}

export default About;
