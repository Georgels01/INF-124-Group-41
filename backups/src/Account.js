import React, { useState } from 'react';

const Account = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

const handleSubmit = async (event) => {
  event.preventDefault();
  const endpoint = isLogin ? 'http://localhost:3000/api/login' : 'http://localhost:3000/api/create';
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  alert(data.message);
};
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="Home.css" />
      <title>Account</title>
      <header>
        <h1>{isLogin ? 'Log In' : 'Create Account'}</h1>
      </header>
      <main>
        <section className="gallery-section">
          <form onSubmit={handleSubmit}>
            <label htmlFor="uname">{isLogin ? 'Username:' : 'New Username:'}</label>
            <input type="text" id="uname" name="uname" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br /><br />
            <label htmlFor="pword">{isLogin ? 'Password:' : 'New Password:'}</label>
            <input type="password" id="pword" name="pword" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br /><br />
            <input type="submit" defaultValue={isLogin ? 'Log In' : 'Create Account'} />
            <button type="button" onClick={() => setIsLogin(!isLogin)} style={{ marginLeft: '10px' }}>
              Switch to {isLogin ? 'Create Account' : 'Log In'}
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Account;
