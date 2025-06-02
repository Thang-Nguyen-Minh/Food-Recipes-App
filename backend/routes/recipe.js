const express = require('express');
const {getRecipes} = require("../controller/recipe");
const app = express();
const router = express.Router();
router.get("/",getRecipes)
module.exports = router;