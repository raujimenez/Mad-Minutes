const express = require('express');
const app = express();
const gameRouter = require('./routes/game');

const port = '3000';

app.set("view engine", "pug");
app.set("views", "./views");

app.use('/game', gameRouter);

app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});