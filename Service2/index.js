const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Service 2 Response'));
app.listen(3001, '0.0.0.0', () => console.log('Service 2 running'));