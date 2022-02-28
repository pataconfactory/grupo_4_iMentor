const express = require('express');
const path = require('path');
const productRoutes = require('./routes/products');
const mainRoutes = require('./routes/main');

const app = express();

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));


app.listen(3000, ()  => {
    console.log('IMentor está corriendo');
});

app.use(mainRoutes);

app.use(productRoutes);