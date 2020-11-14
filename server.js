const express = require('express');
const app = express();

app.get('/recipes', require('./src/routes'));

app.listen(3000);
