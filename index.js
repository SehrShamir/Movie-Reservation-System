const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const cors = require('cors')

const mongoose = require('mongoose');
const movieRoutes = require('./routes/movie-routes');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('Hitting Home!');
    res.json({ message: 'Hello World!' });
});

app.use('/mba/api/v1', movieRoutes);

app.listen(process.env.PORT, async () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    await mongoose.connect(process.env.DB_URI);
    console.log('Connected to MongoDB');
});
