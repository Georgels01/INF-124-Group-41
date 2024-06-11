import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <h1>Welcome to George's Tire Shop</h1>
      <main>
        <section className="scroll-down">
          <h2>Scroll down</h2>
        </section>
        <section className="gallery-section">
          <div className="button">
            <img src="Account.jpg" alt="Account" />
            <p>&nbsp;</p>
            <Link to="/account" className="details-button">Account</Link>
          </div>

          <div className="button">
            <img src="Products.jpg" alt="Products" />
            <p>&nbsp;</p>
            <Link to="/products" className="details-button">Products</Link>
          </div>
          <div className="button">
            <img src="Cart.jpg" alt="Cart" />
            <p>&nbsp;</p>
            <Link to="/cart" className="details-button">Cart</Link>
          </div>
          <div className="button">
            <img src="About.jpg" alt="About" />
            <p>&nbsp;</p>
            <Link to="/about" className="details-button">About</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;