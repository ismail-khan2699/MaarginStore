import React, { useState, useEffect } from 'react';
import storeData from './../assets/Store.json';
import ProductCard from './ProductCard';
import Spinner from './spinner';

const mapSortFunctions = {
  lowestPrice: (a, b) => a.price - b.price,
  highestPrice: (a, b) => b.price - a.price,
  az: (a, b) => a.title.localeCompare(b.title),
  za: (a, b) => b.title.localeCompare(a.title),
  default: (a, b) => a.id - b.id,
};

function Store({ category, limit, showSort = false }) {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const [showSortOption, setShowSortOption] = useState(showSort);
  const [isLoading, setIsLoading] = useState(true); 

  const fetchDataFunction = async () => {
    try {
      setIsLoading(true);
      const data = await storeData; 
      setItems(data);
      setFilteredItems(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFunction();
  }, []);

  useEffect(() => {
    let filtered = items;
  
    if (category) {
      filtered = items.filter((item) =>
        item.category.toLowerCase() === category.toLowerCase()
      );
    }
  
    setFilteredItems(filtered);
  }, [items, category]);
  

  useEffect(() => {
     {
      const sortedItems = [...filteredItems].sort(mapSortFunctions[sortBy]);
      setFilteredItems(sortedItems);
    }
  }, [sortBy]);

  const limitedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div>
      {showSortOption && (
        <div className='flex justify-end m-4 rounded-full space-x-6 rtl:space-x-reverse'>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Default</option>
            <option value="lowestPrice">Price - Lowest</option>
            <option value="highestPrice">Price - Highest</option>
            <option value="az">Alphabetical - A to Z</option>
            <option value="za">Alphabetical - Z to A</option>
          </select>
        </div>
      )}

<div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {isLoading ? (
    <div className='h-100 w-96'><Spinner/></div>
  ) : (
    limitedItems.map((item) => (
      <ProductCard item={item} key={item.id} />
    ))
  )}
</div>

    </div>
  );
}

export default Store;
