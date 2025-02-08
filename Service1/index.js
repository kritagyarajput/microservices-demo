const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Service 1 Response'));
app.listen(3000, '0.0.0.0', () => console.log('Service 1 running'));