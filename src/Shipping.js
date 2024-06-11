import React, { useState } from 'react';

const Shipping = () => {
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [dlocation, setDlocation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const shippingDetails = { region, city, dlocation };

    try {
      const response = await fetch('http://localhost:3000/api/shipping', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(shippingDetails),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Shipping details saved successfully!');
      } else {
        alert('Error saving shipping details: ' + result.message);
      }
    } catch (error) {
      alert('Error saving shipping details: ' + error.message);
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="Home.css" />
      <title>Shipping</title>
      <header>
        <h1>Shipping</h1>
      </header>
      <main>
        <section className="gallery-section">
          <div className="button">
            <img src="continents.jpg" alt="Continents" />
            <form onSubmit={handleSubmit}>
              <p>&nbsp;</p>
              <label htmlFor="region">Region:</label>
              <input
                type="text"	
                id="region"
                name="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              /><br /><br />
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              /><br /><br />
              <label htmlFor="dlocation">Detail Location:</label>
              <input
                type="text"
                id="dlocation"
                name="dlocation"
                value={dlocation}
                onChange={(e) => setDlocation(e.target.value)}
              /><br /><br />
              <input type="submit" value="Confirm Shipping" />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Shipping;
