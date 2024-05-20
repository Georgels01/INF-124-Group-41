// Account.js
import React from 'react';

const Account = () => {
  return (<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="Home.css" />
  <title>Account</title>
  <header>
    <h1>Account</h1>
  </header>
  <main>
    <section className="gallery-section">
      <div className="button">
        <button
          style={{
            fontSize: "1.5em",
            backgroundColor: "#A08ACC",
            color: "#fff"
          }}
          className="details-button"
        >
          Log in
        </button>

          <form action="/home.html">
            <p>&nbsp;</p>
            <label htmlFor="uname">Username:</label>
            <input type="text" id="uname" name="uname" />
            <br />
            <br />
            <label htmlFor="pword">Password:</label>
            <input type="text" id="pword" name="pword" />
            <br />
            <br />
            <input type="submit" defaultValue="Confirm" />
          </form>

      </div>
    </section>
    <section className="gallery-section">
      <div className="button">
        <button
          style={{
            fontSize: "1.5em",
            backgroundColor: "#A08ACC",
            color: "#fff"
          }}
          className="details-button"
        >
          Create Account
        </button>

          <form action="/home.html">
            <p>&nbsp;</p>
            <label htmlFor="uname2">Username:</label>
            <input type="text" id="uname2" name="uname" />
            <br />
            <br />
            <label htmlFor="pword2">Password:</label>
            <input type="text" id="pword2" name="pword" />
            <br />
            <br />
            <input type="submit" defaultValue="Confirm" />
          </form>

      </div>
    </section>
  </main>
</>
);
};

export default Account;