const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv').config();

const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
    console.log('Hitting Home!');
    res.json({ message: 'Hello World!' });
});
app.listen(process.env.PORT, async () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    await mongoose.connect(process.env.DB_URI);
    console.log('Connected to MongoDB');
});