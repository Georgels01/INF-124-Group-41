import React, { useState } from 'react';

const Cart = () => {
  const [count, setCount] = useState(1);
  const pricePerItem = 70; // Price of one item
  const totalPrice = count * pricePerItem;

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count > 1) {
      setCount(count - 1);
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
          <div className="button">
            <img src="products.jpg" alt="Product" />
            <p>Tire A</p>
            <p>${pricePerItem}</p>
            <h1 className="display">{count}</h1>
            <button className="minus" onClick={Decrement}>-</button>
            <button className="plus" onClick={Increment}>+</button>
          </div>
          <p style={{ fontSize: '1.5em' }}>Total: ${totalPrice}</p>
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