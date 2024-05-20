// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import Products from './Products';
import Account from './Account';
import Shipping from './Shipping';
import Payment from './Payment';
import Payment_Confirm from './Payment_Confirm';
import './App.css';

const App = () => {




  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/shipping">Shipping</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/account">
            <Account />
          </Route>
          <Route path="/shipping">
            <Shipping />
          </Route>

          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/payment_confirm">
            <Payment_Confirm />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/products">
            <Products />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
};

export default App;
