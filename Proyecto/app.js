const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));


app.listen(8000, ()  => {
    console.log('IMentor está corriendo');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
});