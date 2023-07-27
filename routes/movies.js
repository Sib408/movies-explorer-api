const moviesRouter = require('express').Router();
const {
  getMovies, addMovie, deleteMovie,
} = require('../controllers/movies');

const { validateMovie } = require('../utils/validation');

moviesRouter.get('/', getMovies);
moviesRouter.post('/', validateMovie, addMovie);
moviesRouter.delete('/:_id', deleteMovie);

module.exports = moviesRouter;
