const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));


app.listen(3000, ()  => {
    console.log('IMentor está corriendo');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});