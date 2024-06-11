import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/cart')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error loading cart items:', error));
  }, []);

  const incrementCount = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].count = (newCartItems[index].count || 1) + 1;
    setCartItems(newCartItems);
  };

  const decrementCount = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].count > 1) {
      newCartItems[index].count -= 1;
      setCartItems(newCartItems);
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="Home.css" />
      <title>Cart</title>
      <header>
        <h1>Cart</h1>
      </header>
      <main>
        <section className="gallery-section">
          {cartItems.map((item, index) => (
            <div key={index} className="button">
              <img src={item.img || 'default-product.jpg'} alt={item.name || "Product"} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <h1 className="display">{item.count || 1}</h1>
              <button className="minus" onClick={() => decrementCount(index)}>-</button>
              <button className="plus" onClick={() => incrementCount(index)}>+</button>
            </div>
          ))}
          <p style={{ fontSize: '1.5em' }}>Total: ${cartItems.reduce((total, item) => total + (item.price * (item.count || 1)), 0)}</p>
          <div className="button">
            <p> Change Shipping Location </p>
            <form action='/Shipping'>
              <input type="submit" defaultValue="Change Shipping Location" />
            </form>
            <p> Payment Information </p>
            <form action='/Payment'>
              <input type="submit" defaultValue="Payment Information" />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;