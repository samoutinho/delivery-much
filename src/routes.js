const express = require("express");

const routes = express.Router();

const RecipeController = require("./controllers/RecipeController");

routes.get("/recipes", RecipeController.index);

module.exports = routes;
