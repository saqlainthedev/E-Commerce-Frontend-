import React, { useState, useEffect } from 'react';
import Layout from '../../component/layout/layout';
import './home.css'; // Assuming you create a CSS file for styles

const Home = () => {
  const sliderImages = [
    { image: '1.jpg', text: 'Exclusive Offer on Shoes!' },
    { image: '2.jpg', text: 'Fashionable Styles for Everyone!' },
    { image: '3.jpg', text: 'Shop the Latest Trends Now!' },
  ];

   const products = {
    men: [
      {
        name: 'T-Shirts',
        image: 'tshirt1.jpg',
        description: 'Comfortable cotton t-shirt with a classic fit.',
        price: '$25',
        brandLogo: 'levis.jpg',
        off: '20% off',
        
      },
      {
        name: 'Classic Denim Jeans',
        image: 'jeans.jpg',
        description: 'Durable denim jeans with a timeless look.',
        price: '$40',
        brandLogo: 'brand2.png',
        off: '15% off',
      },
      {
        name: 'Casual Shirts',
        image: 'jeans1.jpg',
        description: 'Perfect for semi-formal and casual occasions.',
        price: '$30',
        brandLogo: 'brand3.png',
        off: '10% off',
      },
      {
        name: 'Sneakers',
        image: 'jeans2.jpg',
        description: 'Stylish and comfortable sneakers for daily wear.',
        price: '$50',
        brandLogo: 'brand4.png',
        off: '25% off',
      },
    ],
    women: [
      {
        name: 'Skinny Jeans',
        image: 'women.jpg',
        description: 'Sleek and form-fitting jeans.',
        price: '$45',
        brandLogo: 'brand5.png',
        off: '20% off',
      },
      {
        name: 'Flowy Tops',
        image: 'womenskirt.jpg',
        description: 'Light and breezy tops for a casual look.',
        price: '$35',
        brandLogo: 'brand6.png',
        off: '15% off',
      },
      {
        name: 'Dresses',
        image: 'womenskirt1.jpg',
        description: 'Elegant dresses for any occasion.',
        price: '$60',
        brandLogo: 'brand7.png',
        off: '10% off',
      },
      {
        name: 'Heels',
        image: 'womenskirt2.jpg',
        description: 'Stylish heels to complement any outfit.',
        price: '$75',
        brandLogo: 'brand8.png',
        off: '25% off',
      },
    ],
    kids: [
      {
        name: 'Graphic T-Shirts',
        image: 'kidsjacket.jpg',
        description: 'Fun graphic tees for kids.',
        price: '$15',
        brandLogo: 'brand9.png',
        off: '30% off',
      },
      {
        name: 'Joggers',
        image: 'kidsjacket1.jpg',
        description: 'Comfortable joggers for active kids.',
        price: '$20',
        brandLogo: 'brand10.png',
        off: '20% off',
      },
      {
        name: 'Hoodies',
        image: 'kidsjacket2.jpg',
        description: 'Warm and cozy hoodies for cooler weather.',
        price: '$30',
        brandLogo: 'brand11.png',
        off: '15% off',
      },
      {
        name: 'Sneakers',
        image: 'kidsjacket3.jpg',
        description: 'Durable sneakers for all-day wear.',
        price: '$40',
        brandLogo: 'brand12.png',
        off: '10% off',
      },
    ],
  };

  const [activeSlide, setActiveSlide] = useState(2);
  

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="home">
        {/* Slider Section */}
        <div className="slider">
          {sliderImages.map((slide, index) => (
            <div
              key={index}
              className={`slide ${activeSlide === index ? 'slide-active' : ''}`}
            >
              <img src={`/images/${slide.image}`} alt={`Slide ${index + 1}`} />
              <div className="slider-text">{slide.text}</div>
            </div>
          ))}
        </div>

           {/* Banner Section */}
           <div className="banner">
            <p>Flat ₹300 Off!</p>
          </div> 

        {/* Product Sections */}
        {['men', 'women', 'kids'].map((category) => (
          <div key={category} className="product-section">
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div className="product-list">
              {products[category].map((product, index) => (
                <div key={index} className="product-item">
                  <img src={`/images/${product.image}`} alt={product.name} />
                  <p className="product-name">{product.name}</p>
                  <p className="product-description">{product.description}</p>
                  <div className="product-price-off">
                    <span className="product-price">{product.price}</span>
                    <span className="product-off">{product.off}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
