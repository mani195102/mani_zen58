import React, { useState, useEffect } from 'react';
import data from '../assets/products.json';
import Products from './Products';
import '../components/home.css'

const Home = () => {
  const [items] = useState(data);
 return (
    <div className='product-container'>
      
      {items.products.map(product => (
        <Products key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
