const { Router } = require('express');

const { addMovie, listMovies, updateMovie, deleteMovie } = require('./movieControllers')

const movieRouter = Router();

// use http verb post to add data to our movie endpoint
movieRouter.post('/movie', addMovie)
movieRouter.get('/movie', listMovies)
movieRouter.patch('/movie', updateMovie)
movieRouter.delete('/movie', deleteMovie)

module.exports = movieRouter;
