import React from 'react';

const Payment_Confirm = () => {
  return (


      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="Home.css" />
        <title>Payment Confirm</title>
        <header>
          <h1>Payment Confirm</h1>
        </header>
        <main>
          <section className="gallery-section">
            <div className="button">
              <img src="products.jpg" alt="Product" />
              <p>Tire A</p>
              <p>$70</p>
            </div>
            <p style={{fontSize: '1.5em'}}> Total: $70 </p>
            <p> Shipping to
              XXX Drive, Irvine, California</p>
            <div className="button">
              <form action="/Products">
                <input type="submit" defaultValue="Confirm" />
              </form>
            </div>
          </section>
        </main>
      </div>
  );
};

export default Payment_Confirm;