const express = require('express');
const {getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe,upload} = require("../controller/recipe");
const app = express();
const router = express.Router();
router.get("/",getRecipes)//Get All Recipe
router.get("/:id",getRecipe)//Get Recipe By Id
router.post("/",upload.single("file"),addRecipe)// add recipe
router.put("/:id",editRecipe)// edit recipe
router.delete("/:id",deleteRecipe)//Delete recipe

module.exports = router;