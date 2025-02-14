import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams for dynamic routing
import Layout from '../../component/layout/layout'; // Ensure Layout is correctly imported
import './Product1Description.css'; // Make sure the CSS path is correct

const ProductDescription = () => {
  const { id } = useParams(); // Get the dynamic product id from URL
  const [selectedImage, setSelectedImage] = useState('/images/11.jpg'); // State to manage selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // To keep track of the current image index



    // Product details (mock data)
    const products = {
      'T-Shirts': {
        name: 'T-Shirts',
        description: 'Comfortable and stylish T-shirts for everyday wear.',
        price: '₹1500',
        originalPrice: '₹2000',
        colors: ['red', 'blue', 'black', 'white', 'pink', 'yellow'],
        images: ['/images/aa.jpg', '/images/bb.jpg', '/images/cc.jpg', '/images/dd.jpg'], // Unique images for T-shirts
      },
      'Shirts': {
        name: 'Shirts',
        description: 'Shirts made by saqlain.',
        price: '₹1000',
        originalPrice: '₹1200',
        colors: ['green', 'yellow', 'pink'],
        images: ['/images/11.jpg', '/images/22.jpg', '/images/33.jpg', '/images/44.jpg'], // Unique images for T-shirts
      },
      'Casual Shirts': {
        name: 'Casual Shirts',
        description: 'Casual Shirts made by saqlain.',
        price: '₹10000',
        originalPrice: '₹2000',
        colors: ['green', 'yellow', 'pink'],
      },

      'Formal Shirts': {
        name: 'Formal Shirts',
        description: 'Formal  Shirts made by saqlain.',
        price: '₹3000',
        originalPrice: '₹100',
        colors: ['green', 'yellow', 'pink'],
      },
      'Casual Shirts': {
        name: 'Casual Shirts',
        description: 'Casual Shirts made by saqlain.',
        price: '₹10',
        originalPrice: '₹100',
        colors: ['green', 'yellow', 'pink'],
      },
      'Casual Shirts': {
        name: 'Casual Shirts',
        description: 'Casual Shirts made by saqlain.',
        price: '₹10',
        originalPrice: '₹100',
        colors: ['green', 'yellow', 'pink'],
      },
      'Casual Shirts': {
        name: 'Casual Shirts',
        description: 'Casual Shirts made by saqlain.',
        price: '₹10',
        originalPrice: '₹100',
        colors: ['green', 'yellow', 'pink'],
      },
      'Casual Shirts': {
        name: 'Casual Shirts',
        description: 'Casual Shirts made by saqlain.',
        price: '₹10',
        originalPrice: '₹100',
        colors: ['green', 'yellow', 'pink'],
      },
      'Casual Shirts': {
        name: 'Casual Shirts',
        description: 'Casual Shirts made by saqlain.',
        price: '₹10',
        originalPrice: '₹100',
        colors: ['green', 'yellow', 'pink'],
      },
      'Casual Shirts': {
        name: 'Casual Shirts',
        description: 'Casual Shirts made by saqlain.',
        price: '₹10',
        originalPrice: '₹100',
        colors: ['green', 'yellow', 'pink'],
      },

      // Add other products with their details...
    };
  
    // Get the current product based on the id from the URL
    const product = products[id] || {};

  // Use the product-specific images, or fallback to the default image
  const images = product.images || ['/images/default.jpg'];


  // Function to handle thumbnail click
  const handleThumbnailClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);  
  };

  // Function to navigate to next image in the modal
  const showNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  // Function to navigate to previous image in the modal
  const showPreviousImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <Layout>
      <div className="product-description-container">
        {/* Left side: Product Images */}
        <div className="product-images">
          <div className="image-grid">

            {/* Add your image grid here */}
            {/* First Row */}
            <div className="image-row">
              {images.slice(0, 2).map((image, index) => (
                <div key={index} className="grid-image-container">
                  <img
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    className={`grid-image ${selectedImage === image ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedImage(image);
                      setCurrentImageIndex(index);
                      setIsModalOpen(true);  // Open modal when thumbnail is clicked
                    }}
                  />
                </div>
              ))}
            </div>
            {/* Second Row */}
            <div className="image-row">
              {images.slice(2).map((image, index) => (
                <div key={index + 2} className="grid-image-container">
                  <img
                    src={image}
                    alt={`Product Image ${index + 3}`}
                    className={`grid-image ${selectedImage === image ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedImage(image);
                      setCurrentImageIndex(index + 2);
                      setIsModalOpen(true);  // Open modal when thumbnail is clicked
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal for Fullscreen Image */}
        {isModalOpen && (
          <div className="fullscreen-modal">
            <button className="close-button" onClick={closeModal}>×</button>

            {/* Image Navigation (Left and Right Buttons) */}
            <button className="image-navigation left" onClick={showPreviousImage}>←</button>
            <button className="image-navigation right" onClick={showNextImage}>→</button>

            {/* Thumbnail Container on top-left */}
            <div className="thumbnail-container">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail-image ${selectedImage === image ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(image, index)}
                />
              ))}
            </div>

            <div className="fullscreen-image-container">
              <img
                src={selectedImage}
                alt="Full Size"
                className="fullscreen-image"
              />
            </div>
          </div>
        )}

        {/* Right side: Product Details */}
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">
            ₹<span className="original-price">{product.originalPrice}</span> {product.price}
          </p>
           {/* Color Selector */}
          <div className="color-selector">
            <label>Colors:</label>
            <div className="color-options">
              {product.colors?.map((color, index) => (
                <button key={index} className="color-option" style={{ backgroundColor: color }}></button>
              ))}
            </div>
          </div>


          {/* Size Selector */}
          <div className="size-selector">
            <label>Select Size:</label>
            <div className="size-options">
              <button className="size-option">XS</button>
              <button className="size-option">S</button>
              <button className="size-option active">M</button>
              <button className="size-option">L</button>
              <button className="size-option">XL</button>
            </div>
          </div>

          {/* Product Actions */}
          <div className="product-actions">
            <button className="add-to-bag">🛍️ Add to Bag</button>
            <button className="wishlist-button">
              <span role="img" aria-label="heart">♡</span> Wishlist
            </button>
          </div>

          {/* Delivery Options */}
          <div className="delivery-options">
            <span role="img" aria-label="car">🚚</span>
            <input
              type="text"
              placeholder="Enter Pincode"
              className="pincode-input"
            />
            <button className="check-button">Check</button>
            <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
            <p>100% Original Products</p>
            <p>Pay on delivery might be available</p>
            <p>Easy 14 days returns and exchanges</p>
          </div>

          {/* Best Offer Section */}
          <div className="best-offer">
            <h3>Best Offer</h3>
            <p>Get the best deals on this product right now!</p>
          </div>

          {/* Bank Offers Section */}
          <div className="bank-offers">
            <h3>Bank Offers</h3>
            <ul>
              <li>10% Discount on HDFC Bank Credit Card EMI</li>
              <li>10% Discount on IDFC FIRST Bank Credit Card EMI</li>
              <li>5% Discount on Myntra Kotak Credit Card</li>
            </ul>
          </div>

          {/* Product Details Section */}
          <div className="product-details-section">
            <h3>Product Details</h3>
            <p>This is a detailed description of the product.</p>
          </div>

          {/* Size & Fit Section */}
          <div className="size-fit">
            <h3>Size & Fit</h3>
            <p>Our model is wearing size M. The fit is true to size.</p>
          </div>

          {/* Product Specifications */}
          <div className="product-specifications">
            <h3>Product Specifications</h3>
            <ul>
              <li>Brand: Example</li>
              <li>Material: Cotton</li>
              <li>Color: Red</li>
              <li>Product Code: 31714333</li>
              <li>Seller: ABC Enterprises</li>
              <li>
                <a href="/supplier-info" target="_blank" rel="noopener noreferrer">
                  View Supplier Information
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Reviews */}
          <div className="customer-reviews">
            <h3>Customer Reviews</h3>
            <div className="review">
              <p>⭐⭐⭐⭐☆</p>
              <p>"Great quality, true to size!"</p>
            </div>
            <div className="review">
              <p>⭐⭐⭐⭐⭐</p>
              <p>"Very comfortable and stylish!"</p>
            </div>
            {/* Add more reviews here */}
          </div>

          {/* Recently Viewed Products */}
          <div className="recently-viewed">
            <h3>Recently Viewed Products</h3>
            <div className="recently-viewed-items">
              {/* Display recently viewed products here */}
            </div>
          </div>

          {/* Product Recommendations */}
          <div className="product-recommendations">
            <h3>You May Also Like</h3>
            <div className="recommendations-items">
              {/* Display similar products here */}
            </div>
          </div>

          {/* Return & Exchange Policy */}
          <div className="return-policy">
            <h3>Return & Exchange Policy</h3>
            <p>If you're not satisfied with your purchase, return it within 14 days for a full refund or exchange.</p>
          </div>

          {/* Gift Wrap & Personalization Option */}
          <div className="gift-wrap">
            <h3>Gift Wrap & Personalization</h3>
            <label>
              <input type="checkbox" /> Add Gift Wrap
            </label>
            <label>
              <input type="checkbox" /> Personalize with a Message
            </label>
          </div>

          {/* Social Media Sharing */}
          <div className="social-sharing">
            <h3>Share This Product</h3>
            <button className="social-button"> Facebook</button>
            <button className="social-button">Twitter</button>
            <button className="social-button">WhatsApp</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDescription;
