const Movie = require('../models/movie-model');

const createMovie = async (movieData) => {
    console.log('Service received:', movieData);
    return await Movie.create(movieData);
};

const fetchMovies = async (query) => {
    return await Movie.find(query);
};

const getMoviById = async (id) => {
    return await Movie.findById(id);
};

const updateMovie = async (id, movieData) => {
    return await Movie.findByIdAndUpdate(id, movieData, { new: true });
};

const deleteMovie = async (id) => {
    return await Movie.findByIdAndDelete(id);
};

module.exports = {
    createMovie,
    deleteMovie,
    getMoviById,
    updateMovie,
    fetchMovies
};

