const express = require('express');
const db = require('./models');
const app = express();

app.use(express.json());

// rotas
const playerRoute = require('./routes/playerRoute');
app.use(playerRoute);

db.sequelize.sync().then(() => {
    app.listen('3000', () => {
        console.log('Server is running');
    });
});



