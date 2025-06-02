const Recipes = require('../models/recipe');
const getRecipes = async (req, res) => {
    const recipes = await Recipes.find({});
    return res.json(recipes);
}
const getRecipeById = async (req, res) => {
    const recipes = await Recipes.findById(req.params.id);
    return res.json(recipes);
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
    const {title,ingredients,instructions,time} = req.body;
    let recipe = await Recipes.findById(req.params.id);
    try{
        if(recipe) {
            await Recipes.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            })
            res.json({title,ingredients,instructions,time});
        }
    }catch(err){
        res.status(400).json({message:"Error updating Recipe"});
    }
}
const deleteRecipe = async (req, res) => {
    res.send('Recipes List!');
}
module.exports = {getRecipes,getRecipeById,addRecipe,editRecipe,deleteRecipe};