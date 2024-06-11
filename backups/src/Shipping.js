import React from 'react';

const Shipping = () => {
  return (

      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="Home.css" />
        <title>Product Gallery</title>
        <header>
          <h1>Shipping</h1>
        </header>
        <main>
          <section className="gallery-section">
            <div className="button">
              <img src="continents.jpg" alt="Continents" />
              <form action="/Cart">
                <p>&nbsp;</p>
                <label htmlFor="region">Region:</label>
                <input type="text" id="region" name="region" /><br /><br />
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" /><br /><br />
                <label htmlFor="dlocation">Detail Location:</label>
                <input type="text" id="dlocation" name="dlocaton" /><br /><br />
                <input type="submit" defaultValue="Confirm Shipping" />
              </form>
            </div>
          </section>
        </main>
      </div>
  );
};

export default Shipping;