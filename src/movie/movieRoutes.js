const { Router } = require("express");

const { addMovie, listMovies, findMovie, updateMovie, deleteOneMovie } = require("./movieControllers");

const movieRouter = Router();

// use http verb post to add data to our movie endpoint
movieRouter.post("/movie/create", addMovie);
movieRouter.get("/movie/list", listMovies);
movieRouter.get("/movie/find", findMovie);
movieRouter.put("/movie/update", updateMovie);
movieRouter.delete("/movie/delete", deleteOneMovie);
module.exports = movieRouter;


// testing with insomnia //
// DONE // create = {"title": "The Martian", "actors": "Mat Damon"}
// DONE // create = {"title": "Hobbs and Shaw", "actors": "Dwayne Johnson"}
// DONE // create = {"title": "Rampage", "actors": "Dwayne Johnson"}

// DONE // list = {"title": "Rampage"}
// DONE // list = {"actors": "Dwayne Johnson"}}
// reasearch partial string search...

// DONE // find = JUST REALIZED THIS IS THE SAME AS LIST

// DONE // update = {"title": "Hobbs and Shaw", "actors": "Dwayne Johnson, Jason Statham"}
// changed actors to "Dwayne Johnson, Jason Statham"
// DONE // delete = {"title": "The Martian"}