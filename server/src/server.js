const express = require('express');
const app = express();



app.use('/', (req, res) => {
    res.send('Welcome to API');
});

app.listen('3000', () => {
    console.log('Server is running');
});