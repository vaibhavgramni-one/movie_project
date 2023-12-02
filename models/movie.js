const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : true
    }
    } , {
    timestamps : true
})

const Movie = mongoose.model('Movie' , movieSchema);

module.exports = Movie