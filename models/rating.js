const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    
    movieId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    
    comment : {
        type : String,
        trim : true,
        required : true
    },

    rating : {
        type : Number,
        enum : [1 , 2 , 3 , 4 , 5]
    }

} , { timestamps : true })

const Rating = mongoose.model('Rating' , ratingSchema);

module.exports = Rating
