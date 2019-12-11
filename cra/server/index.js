const express = require("express");
var app = express();

const goods = [
    { name: 'Nokia 3310', rating: 5.5, price: 1100 },
    { name: 'Nokia 3310', rating: 5.5, price: 1100 },
    { name: 'Nokia 3310', rating: 5.5, price: 1100 },
    { name: 'Nokia 3310', rating: 5.5, price: 1100 },
    { name: 'Nokia 3310', rating: 5.5, price: 1100 },
    { name: 'Sony PS', rating: 4.5, price: 20000 },
    { name: 'Sony PS', rating: 4.5, price: 20000 },
    { name: 'Sony PS', rating: 4, price: 17500 },
    { name: 'XBox One', rating: 4, price: 20000 },
    { name: 'XBox One', rating: 4, price: 19126 },
    { name: 'GameBoy', rating: 4, price: 1000 },
    { name: 'GameBoy', rating: 3.5, price: 500 },
    { name: 'PSP', rating: 4.2, price: 5000 },
    { name: 'GoPro', rating: 4.8, price: 20000 },
    { name: 'GoPro', rating: 4.1, price: 17000 },
    { name: 'GoPro', rating: 4.5, price: 18300 },
    { name: 'Dendy', rating: 3.5, price: 800 },
    { name: 'Dendy', rating: 5.0, price: 1600 },
];

app.get('/api/getGoods', function(req, res) {

    res.send(goods);
});

app.listen(5000, function() { //
    console.log('Server is started');
});