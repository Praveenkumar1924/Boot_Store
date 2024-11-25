import React, { useEffect } from 'react';
import '../css/Home.css'
import axios from 'axios'; // Import Axios


const Home = (setRole) => {
  
  return (
    <div className='hero'>
        <div className='hero-content'>
            <h1 className='hero-text'>Book Shop</h1>
            <p className='hero-description'>
                Browse the collection of our best top interesting books.
                you will definitely find what you are looking for.
            </p>
        </div>
        <div className="hero-image"></div>
    </div>
  )
}

export default Home;
