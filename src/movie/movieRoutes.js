const { Router } = require("express");

const { addMovie, listMovies } = require("./movieControllers");

const movieRouter = Router();

// use http verb post to add data to our movie endpoint
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);

module.exports = movieRouter;