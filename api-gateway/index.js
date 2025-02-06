const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Route to get users from User Service
app.get('/users', async (req, res) => {
  const response = await axios.get('http://10.0.2.12:3001/users');
  res.json(response.data);
});

// Route to get products from Product Service
app.get('/products', async (req, res) => {
  const response = await axios.get('http://10.0.2.13:3002/products');
  res.json(response.data);
});

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
});