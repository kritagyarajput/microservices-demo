const express = require('express');
const app = express();
const port = 3002;

app.get('/products', (req, res) => {
  res.json([{ product: "Book" }, { product: "Pen" }]);
});

app.listen(port, () => {
  console.log(`Product Service running on port ${port}`);
});