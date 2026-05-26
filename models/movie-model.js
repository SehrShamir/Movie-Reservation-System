const mongosse = require('mongoose');

const movieSchema = new mongosse.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    casts: {
        type: [String],
        required: true
    },
    trailerUrl: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true,
        default: 'English'

    },
    dircetor: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true,
        default: "Released"
    },
},
    {
        timestamps: true

    });
const Movie = mongosse.model('Movie', movieSchema);
module.exports = Movie;