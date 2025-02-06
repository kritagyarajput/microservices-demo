const express = require('express');
const app = express();
const port = 3001;

app.get('/users', (req, res) => {
  res.json([{ name: "John" }, { name: "Alice" }]);
});

app.listen(port, () => {
  console.log(`User Service running on port ${port}`);
});