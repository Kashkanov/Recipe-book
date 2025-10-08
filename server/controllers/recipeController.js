const express = require("express");
const multer = require("multer");
const Recipe = require("../models/Recipe");

const router = express.Router();
const api_url = "http://localhost:5050/";
const authenticateToken = require("../middleware/authenticateToken");
const {matchRecipe} = require("../services/recipe/recipeMatch");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/[:.]/g, '') + "_" + file.originalname);
    },
});

const upload = multer({storage: storage});

// Get all recipes
router.get("/", authenticateToken, async (req, res) => {
    try{
        const page = req.query.page;
        const currPage = parseInt(page);
        const search = req.query.search;
        const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedSearch, 'i');
        let query = {}

        // if search is not empty, set conditions to search for recipes with names or conditions that contains it
        if (search) {
            query = {
                $or: [
                    { title: { $regex: regex } },
                    { description: { $regex: regex } }
                ]
            }
        }

        const recipes = await Recipe
            .find(query)
            .skip((currPage - 1) * 8)
            .limit(8)

        console.log("Recipe found: ", recipes);

        const totalRecipes = await Recipe.countDocuments(query);
        res.json({
            recipes: recipes,
            total: totalRecipes
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Get latest recipe
router.get("/latest/", authenticateToken,async (req, res) => {
    try{
        const recipe = await Recipe.findOne().sort({datetime_added: -1});
        res.json(recipe);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Get three latest recipes
router.get("/threeLatest/", authenticateToken, async (req, res) => {
    try{
        const recipes = await Recipe.find().sort({datetime_added: -1}).skip(1).limit(3);
        res.json(recipes);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Get one recipe
router.get("/:id", authenticateToken, async (req, res) => {
    try{
        const recipe = await Recipe.findById(req.params.id);
        res.json(recipe);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Create one recipe
router.post("/", authenticateToken, async (req, res) => {
    try{
        console.log(req.body);
        const newRecipe = await Recipe.create(req.body);
        res.status(200).json({message: "Recipe created", recipe: newRecipe});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
});

router.post("/uploadImage", authenticateToken, upload.single("picture"), async (req, res) => {
    try{
        res.json({url: api_url + "uploads/" + req.file.filename});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

// return the most similar recipe based on ingredients
router.post("/matchRecipe", /*authenticateToken,*/ async (req, res) => {
    try{
        console.log(req.body);
        const allRecipes = await Recipe.find();
        const ingredients = req.body;
        const scores = matchRecipe(ingredients, allRecipes);
        const topMatchedRecipe = scores[0];
        scores.shift();
        // console.log(scores);    //<===
        if(scores.length > 0)
            res.status(200).json({message: "Recipe matched", top: topMatchedRecipe, scores: scores});
        else
            res.status(204).end();
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
})

module.exports = router;