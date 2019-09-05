const express = require('express');
const app = express();
const port = '3000';

app.get('/', (req, res) => {
   res.send('Place Holder Value for Mad Minute'); 
});

app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});