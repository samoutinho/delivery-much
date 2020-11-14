const axios = require("axios");
require("dotenv").config();

const giphyApiKey = process.env.GIPHY_API_KEY;
const urlGiphy = `http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&limit=1`;

module.exports = {
  async index(req, res) {
    const ingredients = req.query.i;
    const keywords = ingredients.split(",");
    const recipes = [];

    //A API deve receber como parâmetro um conjunto de ingredientes (máximo 3)
    if (keywords.length > 3) {
      console.error("Quantidade máxima de ingredientes: 3");
      return res.json({ keywords, recipes });
    }

    try {
      const recipePuppy = await axios.get(
        `http://www.recipepuppy.com/api/?i=${ingredients}`
      );

      const results = recipePuppy.data.results;

      for (let recipe of results) {
        //convertendo os ingredientes em array e ordenando em ordem alfabética
        let ingredients = recipe.ingredients
          .split(",")
          .map((i) => i.trim())
          .sort();

        const newRecipe = {
          title: recipe.title,
          ingredients,
          link: recipe.href,
          gif: null,
        };

        //retirando os espaços para buscar o gif no servidor giphy
        const recipeTitleSplit = recipe.title.split(" ").join("+");
        try {
          const giphy = await axios.get(`${urlGiphy}&q=${recipeTitleSplit}`);
          dataGiphy = giphy.data.data.shift();

          newRecipe.gif = dataGiphy.url;
        } catch (error) {
          const { request, ...errorObject } = error;
          console.log("Ocorreu algum erro ao buscar o gif!");
          console.error(errorObject);
        }

        recipes.push(newRecipe);
      }
    } catch (error) {
      const { request, ...errorObject } = error;
      console.error("Erro ao buscar as receitas: ", errorObject);
    }

    return res.json({ keywords, recipes });
  },
};
