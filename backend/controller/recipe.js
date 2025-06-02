const Recipes = require('../models/recipe');
const getRecipes = async (req, res) => {
    res.send('Recipes List!');
}
const getRecipeById = async (req, res) => {
    res.send('Recipes List!');
}
const addRecipe = async (req, res) => {
    const {title,ingredients,instructions,time} = req.body;
    if(!title || !ingredients || !instructions) {
        res.json({message:"Please enter title and ingredients"});
    }
    const newRecipe = await Recipes.create({
        title,ingredients,instructions,time
    })
    return res.json(newRecipe);
}
const editRecipe = async (req, res) => {
    res.send('Recipes List!');
}
const deleteRecipe = async (req, res) => {
    res.send('Recipes List!');
}
module.exports = {getRecipes,getRecipeById,addRecipe,editRecipe,deleteRecipe};