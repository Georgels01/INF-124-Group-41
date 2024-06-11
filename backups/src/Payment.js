import React from 'react';

const Payment = () => {
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
              <form action="/payment_confirm">
                <p>&nbsp;</p>
                <label htmlFor="cnumber">Card number:</label>
                <input type="text" id="cnumber" name="cnumber" /><br /><br />
                <label htmlFor="cvv">CVV:</label>
                <input type="text" id="cvv" name="cvv" /><br /><br />
                <input type="submit" defaultValue="Confirm Payment" />
              </form>
            </div>
          </section>
        </main>
      </div>
  );
};

export default Payment;