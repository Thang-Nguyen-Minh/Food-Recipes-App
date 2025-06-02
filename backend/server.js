const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv').config();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})