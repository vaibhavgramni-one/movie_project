require('dotenv').config();
const express = require('express');
require('./db/mongoose');
const movieRoutes = require('./routes/movie');
const ratingRoutes = require('./routes/rating');
const userRoutes = require('./routes/user');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
// configuring routes....//
app.use(movieRoutes);
app.use(ratingRoutes);
app.use(userRoutes);


app.listen(port , () => {

    if (process.env.DEBUG === 'false') {
        console.log = function () { }
    }

    console.log('server is up and running at port' , port);
})

