const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const dotenv = require('dotenv').config();
const connectDb=require("./config/connectionDb.js");
connectDb();
const port = process.env.PORT;
const recipesRoutes = require('./routes/recipe');
const userRoutes=require("./routes/user");

app.use("/",userRoutes);
app.use("/recipe", recipesRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})