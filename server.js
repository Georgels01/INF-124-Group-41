const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb://localhost:27017/tire-shop";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB');
  loadProducts();  // Call loadProducts after connection is established
}).catch(err => console.error('Connection error:', err));

const productSchema = new mongoose.Schema({
  category: String,
  img: String,
  name: String,
  price: Number,
  description: String,
  experienceLabel: String
});

const cartSchema = new mongoose.Schema({
  category: String,
  img: String,
  name: String,
  price: Number,
  description: String,
  experienceLabel: String
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const shippingSchema = new mongoose.Schema({
  region: String,
  city: String,
  dlocation: String
});

const paymentSchema = new mongoose.Schema({
  cardNumber: String,
  cvv: String
});

const Product = mongoose.model('Product', productSchema);
const Cart = mongoose.model('Cart', cartSchema);
const User = mongoose.model('User', userSchema);
const Shipping = mongoose.model('Shipping', shippingSchema);
const Payment = mongoose.model('Payment', paymentSchema);

const products = [
  {
    category: 'summer',
    img: 'products.jpg',
    name: 'Tire A',
    price: 90,
    description: 'Can handle high temperature and Dry environment',
    experienceLabel: 'experience',
  },
  {
    category: 'summer',
    img: 'products.jpg',
    name: 'Tire B',
    price: 70,
    description: 'Can handle high temperature and muddy environment',
    experienceLabel: 'experience2',
  },
  {
    category: 'winter',
    img: 'Products2.jpg',
    name: 'Tire C',
    price: 60,
    description: 'Can handle Low temperature and snow environment',
    experienceLabel: 'experience3',
  },
];

async function loadProducts() {
  try {
    const existingProducts = await Product.find({});
    if (existingProducts.length === 0) {
      await Product.insertMany(products);
    }
  } catch (err) {
    console.error('Error loading products:', err);
  }
}

app.get('/api/cart', async (req, res) => {
  try {
    const cart = await Cart.find({});
    res.json(cart);
  } catch (err) {
    res.status(500).send('Error reading cart data');
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).send('Error reading products data');
  }
});

app.post('/api/addToCart', async (req, res) => {
  const { product } = req.body;
  try {
    const newCartItem = new Cart(product);
    await newCartItem.save();
    res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product to cart', error: error.message });
  }
});

app.post('/api/create', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const newUser = new User({ username, password });
    await newUser.save();
    res.json({ message: 'Account created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating account', error: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

app.post('/api/shipping', async (req, res) => {
  const { region, city, dlocation } = req.body;
  const newShippingDetails = new Shipping({ region, city, dlocation });

  try {
    await newShippingDetails.save();
    res.status(200).json({ message: 'Shipping details saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving shipping details', error: error.message });
  }
});

app.post('/api/payment', async (req, res) => {
  const { cardNumber, cvv } = req.body;
  const newPayment = new Payment({ cardNumber, cvv });

  try {
    await newPayment.save();
    res.status(200).json({ message: 'Payment information saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving payment information', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
