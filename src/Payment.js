import React, { useState } from 'react';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const paymentDetails = { cardNumber, cvv };

    try {
      const response = await fetch('http://localhost:3000/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails),
      });

      const result = await response.json();
      if (response.ok) {
	
        alert('Payment information saved successfully!');
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="Home.css" />
      <title>Payment</title>
      <header>
        <h1>Payment</h1>
      </header>
      <main>
        <section className="gallery-section">
          <div className="button">
            <form onSubmit={handleSubmit}>
              <p>&nbsp;</p>
              <label htmlFor="cnumber">Card number:</label>
              <input
                type="text"
                id="cnumber"
                name="cnumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              /><br /><br />
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              /><br /><br />
              <input type="submit" value="Confirm Payment" />
            </form>

	      <form action="/payment_confirm">
                <input type="submit" defaultValue="Confirm Payment" />
              </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Payment;
