const express = require('express');
const app = express();
const port = '3000';

app.set("view engine", "pug");
app.set("views", "./views");

app.get('/', (req, res) => {
   res.render('index', {
       text: 'placeholder values'
   });
});

app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});