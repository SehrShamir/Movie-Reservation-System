const express = require('express');
const { getMovies, createMovie } = require('../controllers/movie-controller');

const router = express.Router();

router.use((req, res, next) => {
    console.log('Route received - Method:', req.method, 'Body:', JSON.stringify(req.body));
    next();
});

router.get('/movies', getMovies);
router.post('/movies', createMovie);

module.exports = router;

