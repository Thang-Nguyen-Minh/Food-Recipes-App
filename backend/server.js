const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const recipesRoutes = require('./routes/recipe');
app.use("/recipe", recipesRoutes);
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})