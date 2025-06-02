const express = require('express');
const {getRecipes,getRecipeById,addRecipe,editRecipe,deleteRecipe} = require("../controller/recipe");
const app = express();
const router = express.Router();
router.get("/",getRecipes)//Get All Recipe
router.get("/:id",getRecipeById)//Get Recipe By Id
router.post("/",addRecipe)// add recipe
router.put("/:id",editRecipe)// edit recipe
router.delete("/:id",deleteRecipe)//Delete recipe

module.exports = router;