const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://shuail15:geor@2019F@tire-shop.oyhhxy5.mongodb.net/?retryWrites=true&w=majority&appName=Tire-shop";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get('/api/cart', (req, res) => {
    fs.readFile('cart.json', (err, data) => {
        if (err) {
            res.status(500).send('Error reading cart data');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.get('/api/products', (req, res) => {
    res.json(products);
});
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

app.post('/api/addToCart', (req, res) => {
    const { product } = req.body;

    addToCart(product, res);
});


const addToCart = (product, res) => {
    try {
        let cart = [];
        const cartFilePath = 'cart.json';  // Corrected variable name here

        if (fs.existsSync(cartFilePath)) {
            cart = JSON.parse(fs.readFileSync(cartFilePath, 'utf-8'));
        }

        cart.push(product);

        fs.writeFileSync(cartFilePath, JSON.stringify(cart, null, 2));
        res.status(200).json({ message: 'Product added to cart successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product to cart', error: error.message });
    }
};
const loadUsers = () => {
  try {
    return JSON.parse(fs.readFileSync('users.json', 'utf-8')).users;
  } catch (e) {
    return [];
  }
};

const saveUsers = (users) => {
  fs.writeFileSync('users.json', JSON.stringify({ users }, null, 2));
};

app.post('/api/create', (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }
  users.push({ username, password });
  saveUsers(users);
  res.json({ message: 'Account created successfully' });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
