import React from 'react'
import Layout from '../../component/layout/layout';
import { Link } from 'react-router-dom';
import './men.css'; // Assuming you create a CSS file for styles

const Men = () => {
  const categories = [
    {
      title: 'Topwear',
      items: [
        { name: 'T-Shirts', image: '/images/1.jpg', link: '/product/:id' },
        { name: 'Shirts', image: '/images/2.jpg' ,  link :'/product/:id' },
        { name: 'Casual Shirts', image: '/images/3.jpg' , link :'/product/:id'},
        { name: 'Formal Shirts', image: '/images/1.jpg'  , link :'/product/:id'},
        { name: 'Sweat Shirts', image: '/images/2.jpg'  , link :'/product/:id' },
        { name: 'Sweaters', image: '/images/3.jpg' , link :'/product/:id'},
        { name: 'Jackets', image: '/images/2.jpg'  ,  link :'/product/:id'},
        { name: 'Blazers & Coats', image: '/images/1.jpg'  , link :'/product/:id'},
        { name: 'Suits', image: '/images/2.jpg' , link :'/product/:id'},
        { name: 'Rain Jackets', image: '/images/3.jpg'  , link :'/product/:id' },
      ],
    },
    {
      title: 'Bottomwear',
      items: [
        { name: 'Jeans', image: '/images/jeans.jpg' },
        { name: 'Casual Trousers', image: '/images/1.jpg' },
        { name: 'Formal Trousers', image: '/images/2.jpg' },
        { name: 'Shorts', image: '/images/3.jpg' },
        { name: 'Track Pants & Joggers', image: '/images/1.jpg' },
        { name: 'Jeans', image: '/images/2.jpg' },
        { name: 'Casual Trousers', image: '/images/3.jpg' },
        { name: 'Formal Trousers', image: '/images/1.jpg' },
        { name: 'Shorts', image: '/images/2.jpg' },
        { name: 'Track Pants & Joggers', image: '/images/3.jpg' },
      ],
    },
    {
      title: 'Innerwear & Sleepwear',
      items: [
        { name: 'Briefs & Trunks', image: '/images/1.jpg' },
        { name: 'Boxers', image: '/images/2.jpg' },
        { name: 'Vests', image: '/images/3.jpg' },
        { name: 'Sleepwear & Loungewear', image: '/images/1.jpg' },
        { name: 'Thermals', image: '/images/2.jpg' },
        { name: 'Briefs & Trunks', image: '/images/3.jpg' },
        { name: 'Boxers', image: '/images/1.jpg' },
        { name: 'Vests', image: '/images/2.jpg' },
        { name: 'Sleepwear & Loungewear', image: '/images/3.jpg' },
        { name: 'Thermals', image: '/images/1.jpg' },
      ],
    },
    {
      title: 'Footwear',
      items: [
        { name: 'Casual Shoes', image: '/images/1.jpg' },
        { name: 'Sports Shoes', image: '/images/2.jpg' },
        { name: 'Formal Shoes', image: '/images/3.jpg' },
        { name: 'Sneakers', image: '/images/1.jpg' },
        { name: 'Sandals & Floaters', image: '/images/2.jpg' },
        { name: 'Flip Flops', image: '/images/3.jpg' },
        { name: 'Socks', image: '/images/1.jpg' },
        { name: 'Casual Shoes', image: '/images/2.jpg' },
        { name: 'Sports Shoes', image: '/images/3.jpg' },
        { name: 'Formal Shoes', image: '/images/1.jpg' },
      ],
    },
    {
      title: 'Fashion Accessories',
      items: [
        { name: 'Wallets', image: '/images/1.jpg' },
        { name: 'Belts', image: '/images/2.jpg' },
        { name: 'Perfumes & Body Mists', image: '/images/3.jpg' },
        { name: 'Trimmers', image: '/images/1.jpg' },
        { name: 'Deodorants', image: '/images/2.jpg' },
        { name: 'Accessory Gift Sets', image: '/images/3.jpg' },
        { name: 'Caps & Hats', image: '/images/1.jpg' },
        { name: 'Mufflers, Scarves & Gloves', image: '/images/2.jpg' },
        { name: 'Phone Cases', image: '/images/3.jpg' },
        { name: 'Rings & Wristwear', image: '/images/1.jpg' },
      ],
    },
  ];

  return (
    <Layout>
      <div className="men-page">
        <h1 className="men-page-title">Men</h1>
        {categories.map((category, index) => (
          <div key={index} className="category">
            <h2 className="category-title">{category.title}</h2>
            <div className="category-items">
              {category.items.map((item, idx) => (
                <div key={idx} className="item-card">
                  <Link to={`/product/${item.name}`} className="item-link">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <p className="item-name">{item.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Men;
